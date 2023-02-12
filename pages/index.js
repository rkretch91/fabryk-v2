import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import SectionContainer from '@/components/SectionContainer'
import Banner from '@/components/Banner'
import Intro from '@/components/Intro'
import PostCard from '@/components/PostCard'
import { useTheme } from 'next-themes'
const MAX_DISPLAY = 4
export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return {
    props: {
      posts,
    },
  }
}
export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-indigo divide-opacity-25 font-mono dark:divide-teal">
        <Banner />
        <SectionContainer>
          <Intro />
        </SectionContainer>
        <SectionContainer>
          <ul className="columns-1 gap-8 md:columns-2">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags, images } = post
              return (
                <li key={slug} className="py-4">
                  <PostCard
                    title={title}
                    summary={summary}
                    tags={tags}
                    images={images}
                    slug={slug}
                  />
                </li>
              )
            })}
          </ul>
        </SectionContainer>
      </div>
      <SectionContainer>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="All posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      </SectionContainer>
    </>
  )
}
