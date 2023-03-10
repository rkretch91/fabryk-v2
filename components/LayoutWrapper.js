import { Inter } from '@next/font/google'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import lightModeLogo from '@/data/the-fabryk-logo-purple.png'
import darkModeLogo from '@/data/the-fabryk-logo-teal.png'
import Link from './Link'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from './Image'
const inter = Inter({
  subsets: ['latin'],
})
const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div className={`${inter.className} flex h-screen flex-col justify-between font-sans`}>
        <header className="container m-auto flex w-11/12 items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Image
                    src={darkModeLogo}
                    alt="Logo dark mode the Fabryk"
                    width={400}
                    height={400}
                    className="hidden dark:block"
                    loading="eager"
                  />
                  <Image
                    src={lightModeLogo}
                    alt="Logo dark mode the Fabryk"
                    width={400}
                    height={400}
                    className="block dark:hidden"
                    loading="eager"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="z-40 flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-sans text-xl font-medium text-indigo dark:text-teal sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
export default LayoutWrapper
