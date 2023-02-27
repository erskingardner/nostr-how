import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { ChatBubbleIcon } from '@/components/icons/ChatBubbleIcon'
import { CheckIcon } from './icons/CheckIcon'
import { CogIcon } from './icons/CogIcon'

const guides = [
  {
    href: '/guides/iris',
    name: 'Client: Iris (web)',
    description:
      'A step-by-step guide to getting start on Nostr using the Iris web client.',
    icon: ChatBubbleIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/guides/damus',
    name: 'Client: Damus (iOS)',
    description:
      'A step-by-step guide to getting start on Nostr using the Damus iOS client.',
    icon: ChatBubbleIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/guides/amethyst',
    name: 'Client: Amethyst (Andriod)',
    description:
      'A step-by-step guide to getting start on Nostr using the Amethyst (Android) client.',
    icon: ChatBubbleIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/get-verified',
    name: 'Get Verified',
    description: 'Learn about NIP-05 verification and how to get verified.',
    icon: CheckIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '#',
    name: 'Relay: Nostream',
    description:
      'Learn how to deploy and configure the Nostream relay implementation.',
    comingSoon: true,
    icon: CogIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
]

function GuideIcon({ icon: Icon }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-purple-300/10 dark:group-hover:ring-purple-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-purple-300/10 dark:group-hover:stroke-purple-400" />
    </div>
  )
}

function GuidePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#e6d7ed] to-[#ecdffb] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#27202e] dark:to-[#312834]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function ComingSoonBadge({ guide }) {
  return (
    <span className="mr-0 ml-auto rounded-full border border-fuchsia-500/60 bg-fuchsia-500/20 px-2 text-xs text-purple-700 dark:border-fuchsia-500/80 dark:bg-fuchsia-500/10 dark:text-purple-300 ">
      Coming soon
    </span>
  )
}

function Guide({ guide }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={guide.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <GuidePattern {...guide.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pt-10 pb-4">
        <div className="flex flex-row justify-start">
          <GuideIcon icon={guide.icon} />
          {guide.comingSoon && <ComingSoonBadge />}
        </div>

        <h3 className="mt-4 text-base font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={guide.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {guide.name}
          </Link>
        </h3>
        <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
          {guide.description}
        </p>
      </div>
    </div>
  )
}

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <Guide key={guide.href} guide={guide} />
        ))}
      </div>
    </div>
  )
}
