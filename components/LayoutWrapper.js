import { Inter } from '@next/font/google'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import lightModeLogo from '@/data/the-fabryk-logo-purple.png'
import darkModeLogo from '@/data/the-fabryk-logo-teal.png'
import Link from './Link'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useTheme } from 'next-themes'
import Image from './Image'
const inter = Inter({
  subsets: ['latin'],
})
const LayoutWrapper = ({ children }) => {
  const { theme, resolvedTheme } = useTheme()
  const isDarkTheme = theme === 'dark' || resolvedTheme === 'dark'

  return (
    <>
      <div className={`${inter.className} flex h-screen flex-col justify-between font-sans`}>
        <header className="container m-auto flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  {isDarkTheme ? (
                    <Image
                      src={darkModeLogo}
                      alt="Logo dark mode the Fabryk"
                      width={400}
                      height={400}
                    />
                  ) : (
                    <Image
                      src={lightModeLogo}
                      alt="Logo dark mode the Fabryk"
                      width={400}
                      height={400}
                    />
                  )}
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
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
