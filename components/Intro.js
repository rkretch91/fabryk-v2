import { useTheme } from 'next-themes'
import Typed from 'react-typed'
import { NewsletterForm } from 'pliny/ui/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'

export default function Intro() {
  return (
    <div className="align-center z-50 flex h-screen/2 pt-6 pb-8 md:space-y-5">
      <div className="m-auto text-center text-2xl font-bold">
        <h1>We are Fabio and Ryan.</h1>
        <h1>
          Welcome to our{' '}
          <u>
            <Typed strings={['gay', 'nomadic', 'sexual']} typeSpeed={40} backSpeed={50} loop />
          </u>
          life.
        </h1>
        {siteMetadata.newsletter.provider && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm style={{ background: 'white !important' }} title="" />
          </div>
        )}
      </div>
    </div>
  )
}
