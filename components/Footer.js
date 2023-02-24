import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import ContactForm from './ContactForm'
export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        {siteMetadata.newsletter.provider && (
          <div className="flex items-center justify-center pt-4">
            <ContactForm />
          </div>
        )}
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-indigo dark:text-teal">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
