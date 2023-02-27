import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { Analytics } from '@vercel/analytics/react';

import '@/styles/tailwind.css'
import 'focus-visible'

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)

export async function getStaticPaths({ locales }) {
  // get all directory names under /posts/
  const dirnames = fs.readdirSync(path.join('posts'))
  // Prepare an empty array to store paths w/locale
  const pathsArray = []

  //List all directory names for all locales
  dirnames.map((dirname) => {
    locales.map((language) => {
      pathsArray.push({ params: { slug: dirname }, locale: language })
    })
  })

  return {
    paths: pathsArray,
    fallback: false,
  }
}

export default function App({ Component, pageProps }) {
  let router = useRouter()

  return (
    <>
      <Head>
        {router.pathname === '/' ? (
          <title>Nostr.how</title>
        ) : (
          <title>{`${pageProps.title} - Nostr.how`}</title>
        )}
        <meta name="description" content={pageProps.description} />
      </Head>
      <MDXProvider components={mdxComponents}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
          <Analytics/>
        </Layout>
      </MDXProvider>
    </>
  )
}
