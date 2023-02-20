import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import SectionContainer from '@/components/SectionContainer'
import Banner from '@/components/Banner'
import Intro from '@/components/Intro'
import PostCard from '@/components/PostCard'
const MAX_DISPLAY = 6
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
      <div className="divide-y divide-indigo divide-opacity-25 overflow-x-hidden font-sans dark:divide-teal">
        <Banner />
        <SectionContainer>
          <Intro />
        </SectionContainer>
        <SectionContainer>
          <ul className="mb-4 columns-1 gap-8 md:columns-2">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, title, summary, tags, images } = post
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
          <button className="theme-button float-right w-auto rounded p-2 font-sans text-base font-medium leading-6">
            <Link href="/blog" aria-label="All posts">
              More, More, More
            </Link>
          </button>
        )}
      </SectionContainer>
    </>
  )
}
