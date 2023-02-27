import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const resources = [
  {
    href: '/get-started',
    name: 'Getting Started',
    description: 'Learn the basics of signing up and using Nostr.',
  },
  {
    href: '/verify-your-identity',
    name: 'Get Verified',
    description:
      'Learn how to verify your identity on Nostr to get a checkmark.',
  },
  {
    href: '/the-protocol',
    name: 'The Nostr Protocol',
    description: 'Go deeper into how the Nostr protocol works and why.',
  },
  {
    href: '/why-nostr',
    name: 'Why do we need Nostr?',
    description: "Learn about why Nostr exists and why it's important.",
  },
]

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="resources">
        Resources
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {resources.map((resource) => (
          <div key={resource.href}>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
              {resource.name}
            </h3>
            <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
              {resource.description}
            </p>
            <p className="mt-4">
              <Button href={resource.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
