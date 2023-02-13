import '@/css/tailwind.css'
import '@/css/prism.css'
import '@/css/custom.css'
import 'katex/dist/katex.css'
// import '@/css/docsearch.css' // Uncomment if using algolia docsearch
// import '@docsearch/css' // Uncomment if using algolia docsearch

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import { Analytics } from 'pliny/analytics'
import { SearchProvider } from 'pliny/search'
import LayoutWrapper from '@/components/LayoutWrapper'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  const router = useRouter()
  useEffect(() => {
    router.isReady && setLoading(false)
  }, [router.isReady])

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="stylesheet" href="https://use.typekit.net/gba5hsz.css"></link>
          </Head>
          <Analytics analyticsConfig={siteMetadata.analytics} />
          <LayoutWrapper>
            <SearchProvider searchConfig={siteMetadata.search}>
              <Component {...pageProps} />
            </SearchProvider>
          </LayoutWrapper>
        </ThemeProvider>
      )}
    </>
  )
}
