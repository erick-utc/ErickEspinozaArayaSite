import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type BaseProps = {
  children: ReactNode
  className?: string
  variant?: ButtonVariant
}

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: 'a'
  }

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as: 'button'
  }

const variants: Record<ButtonVariant, string> = {
  primary:
    'border border-[var(--accent-lime)] bg-[#0f1519] text-white shadow-[0_12px_30px_rgba(15,21,25,0.28)]',
  secondary:
    'border border-white/15 bg-white/0 text-[var(--text-inverse)] hover:border-[var(--accent-lime)] hover:text-[var(--accent-lime)]',
  ghost: 'border border-black/10 bg-white text-[var(--text-strong)] hover:border-black/20',
}

const baseClassName =
  'inline-flex items-center justify-center rounded-full px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-warm)]'

export function Button(props: AnchorProps | NativeButtonProps) {
  if (props.as === 'button') {
    const { children, className, variant = 'secondary', type = 'button', ...rest } = props
    const resolvedClassName = cn(baseClassName, variants[variant], className)

    return (
      <button className={resolvedClassName} type={type} {...rest}>
        {children}
      </button>
    )
  }

  const { children, className, variant = 'secondary', ...rest } = props
  const resolvedClassName = cn(baseClassName, variants[variant], className)

  return (
    <a className={resolvedClassName} {...rest}>
      {children}
    </a>
  )
}
