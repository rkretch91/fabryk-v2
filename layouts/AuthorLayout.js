import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import ContactForm from '@/components/ContactForm'
export default function AuthorLayout({ children, content }) {
  const { name, avatar, occupation, company, email, twitter, youtube } = content
  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-indigo font-sans dark:divide-teal">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="font-sans text-3xl font-normal leading-9 tracking-tight text-indigo dark:text-teal sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full object-cover"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-indigo dark:text-teal">{occupation}</div>
            <div className="text-indigo dark:text-teal">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="youtube" href={youtube} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 font-sans font-light text-indigo dark:text-teal dark:prose-dark xl:col-span-2">
            {children}{' '}
            <div className="flex items-center justify-center pt-4">
              <ContactForm />
            </div>
            <Image
              src={'/static/images/about-us-1.jpg'}
              alt="ryan and fabio in dead sea"
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  )
}
