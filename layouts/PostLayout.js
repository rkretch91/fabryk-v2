import { useState } from 'react'
import { Comments } from 'pliny/comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from 'next-share'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/master/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`
const postDateTemplate = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
export default function PostLayout({ content, authorDetails, next, prev, children }) {
  const { path, slug, date, title, tags, images } = content
  const basePath = path.split('/')[0]
  const [loadComments, setLoadComments] = useState(false)
  console.log(`${siteMetadata.siteUrl}/${path}`)
  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/${path}`} authorDetails={authorDetails} {...content} />
      <ScrollTopAndComment />
      <article>
        <div className="font-sans xl:divide-y xl:divide-indigo xl:dark:divide-teal">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-indigo dark:text-teal">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-indigo pb-8 dark:divide-teal xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <dl className="pt-6 pb-10 xl:border-b xl:border-indigo xl:pt-11 xl:dark:border-teal">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={38}
                          height={38}
                          alt="avatar"
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-indigo hover:text-black dark:text-teal dark:hover:text-white"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
              {images && images.length > 0 && (
                <>
                  {images.map((image) => (
                    <Image
                      width={1200}
                      height={1200}
                      src={image}
                      key={image}
                      alt={image}
                      style={{ marginTop: '8px' }}
                    />
                  ))}
                </>
              )}
              <div className="dark:prose-marker:text-teal prose max-w-none pt-10 pb-8 font-light text-indigo prose-img:w-full dark:text-teal dark:prose-invert dark:prose-h1:text-teal dark:prose-h2:text-teal dark:prose-h3:text-teal dark:prose-h4:text-teal dark:prose-a:text-teal dark:prose-strong:text-teal dark:prose-code:text-indigo dark:prose-pre:bg-teal dark:prose-hr:text-teal">
                {children}
              </div>
              {/* {siteMetadata.comments && (
                <div
                  className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  {!loadComments && (
                    <button onClick={() => setLoadComments(true)}>Load Comments</button>
                  )}
                  {loadComments && <Comments commentsConfig={siteMetadata.comments} slug={slug} />}
                </div>
              )} */}
            </div>
            <footer>
              <div className="divide-indigo text-sm font-medium leading-5 dark:divide-teal xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-indigo hover:opacity-80  dark:text-teal dark:hover:opacity-80">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-indigo dark:text-teal">
                          Previous Article
                        </h2>
                        <div className="bg-indigo p-1 text-teal hover:text-white hover:opacity-80 dark:bg-teal dark:text-indigo dark:hover:text-black dark:hover:opacity-80">
                          <Link href={`/${prev.path}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-indigo dark:text-teal">
                          Next Article
                        </h2>
                        <div className="bg-indigo p-1 text-teal hover:text-white hover:opacity-80 dark:bg-teal dark:text-indigo dark:hover:text-black dark:hover:text-primary-400 dark:hover:opacity-80">
                          <Link href={`/${next.path}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <div className="flex justify-between py-4 xl:block xl:space-y-4 xl:py-8">
                  <h2 className="text-xs uppercase tracking-wide text-indigo dark:text-teal">
                    Share this article
                  </h2>
                  <FacebookShareButton
                    url={`${siteMetadata.siteUrl}/${path}`}
                    hashtag={tags && tags.map((tag) => `#${tag}`).join()}
                  >
                    <FacebookIcon size={32} round style={{ marginRight: '4px' }} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={`${siteMetadata.siteUrl}/${path}`}
                    title={`${title} on The Fabryk`}
                    hashtags={tags && tags.map((tag) => `${tag}`)}
                  >
                    <TwitterIcon size={32} round style={{ marginRight: '4px' }} />
                  </TwitterShareButton>
                  <WhatsappShareButton
                    url={`${siteMetadata.siteUrl}/${path}`}
                    title={`${title} on The Fabryk`}
                    separator=" || "
                  >
                    <WhatsappIcon size={32} round style={{ marginRight: '4px' }} />
                  </WhatsappShareButton>
                  <EmailShareButton
                    url={`${siteMetadata.siteUrl}/${path}`}
                    subject={`Check out ${title} on The Fabryk`}
                    body="Here is a pretty cool post from the guys at The Fabryk"
                  >
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                </div>
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${basePath}`}
                  className="text-indigo hover:text-black hover:opacity-80 dark:text-teal dark:hover:text-white dark:hover:opacity-80"
                  aria-label="Back to the blog"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
