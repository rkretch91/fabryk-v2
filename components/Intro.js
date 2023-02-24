import Typed from 'react-typed'
import SocialIcon from './social-icons'
import ContactForm from '@/components/ContactForm'
import siteMetadata from '@/data/siteMetadata'

export default function Intro() {
  return (
    <div className="align-center z-50 flex h-screen/3 flex-col justify-center pt-6 pb-8 md:space-y-5">
      <div className="m-auto mb-4 text-center text-2xl font-bold">
        <h1>We are Fabio & Ryan</h1>
        <h1>( ͡❛ ͜ʖ͡❛) ❤ (❛̃ ͜ʖ❛̃ )</h1>
        <h1>
          Welcome to our{' '}
          <Typed
            strings={['gay', 'nomadic', 'kinky', 'random', 'confusing', 'weird']}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          life.
        </h1>
      </div>
      <div className="m-auto mb-8 mt-0 flex space-x-4">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
        <SocialIcon kind="youtube" href={siteMetadata.youtube} />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} />
      </div>
    </div>
  )
}
