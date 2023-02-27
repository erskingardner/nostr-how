import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-1 dark:ring-inset dark:ring-purple-400/20 dark:hover:bg-purple-400/10 dark:hover:text-purple-300 dark:hover:ring-purple-300',
  secondary:
    'rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300',
  filled:
    'rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-purple-500 dark:text-white dark:hover:bg-purple-400',
  outline:
    'rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
  text: 'text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-500',
}

export function DonateButton({ variant = 'primary', className }) {
  className = clsx(
    'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
    variantStyles[variant],
    className
  )

  return (
    <Link className={className} href="lightning:erskingardner@getalby.com">
      ⚡ Donate to Nostr.how
    </Link>
  )
}
