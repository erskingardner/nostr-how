import nextMDX from '@next/mdx'
import { remarkPlugins } from './mdx/remark.mjs'
import { rehypePlugins } from './mdx/rehype.mjs'
import { recmaPlugins } from './mdx/recma.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
    providerImportSource: '@mdx-js/react',
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/clients/iris',
        destination: '/guides/iris',
        permanent: true,
      },
      {
        source: '/clients/damus',
        destination: '/guides/damus',
        permanent: true,
      },
      {
        source: '/clients/amethyst',
        destination: '/guides/amethyst',
        permanent: true,
      },
    ]
  },
}

export default withMDX(nextConfig)
