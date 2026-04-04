import { existsSync, readdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

const browserManagerDir = join(homedir(), '.browser-driver-manager')
const chromeRoot = join(browserManagerDir, 'chrome')
const driverRoot = join(browserManagerDir, 'chromedriver')

function getLatestVersionDir(rootDir) {
  const entries = readdirSync(rootDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()

  return entries.at(-1)
}

function findExecutablePath(rootDir, targetName) {
  const stack = [rootDir]

  while (stack.length > 0) {
    const currentDir = stack.pop()

    if (!currentDir) {
      continue
    }

    const entries = readdirSync(currentDir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name)

      if (entry.isDirectory()) {
        stack.push(fullPath)
        continue
      }

      if (entry.name === targetName) {
        return fullPath
      }
    }
  }

  return null
}

if (!existsSync(chromeRoot) || !existsSync(driverRoot)) {
  console.error('browser-driver-manager no ha instalado Chrome/ChromeDriver todavia.')
  process.exit(1)
}

const chromeVersionDir = getLatestVersionDir(chromeRoot)
const driverVersionDir = getLatestVersionDir(driverRoot)

if (!chromeVersionDir || !driverVersionDir) {
  console.error('No se encontraron versiones instaladas de Chrome o ChromeDriver.')
  process.exit(1)
}

const chromePath = findExecutablePath(join(chromeRoot, chromeVersionDir), 'Google Chrome for Testing')
const driverPath = findExecutablePath(join(driverRoot, driverVersionDir), 'chromedriver')

if (!chromePath || !driverPath) {
  console.error('No se pudo resolver la ruta del navegador o del driver para Axe.')
  process.exit(1)
}

const result = spawnSync(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  [
    'axe',
    'http://localhost:5173',
    '--chrome-path',
    chromePath,
    '--chromedriver-path',
    driverPath,
    '--save',
    './reports/axe-report.json',
  ],
  { stdio: 'inherit' },
)

process.exit(result.status ?? 1)