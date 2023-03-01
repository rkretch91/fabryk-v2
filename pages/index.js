import React, { useState } from 'react'
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
export default function Home({ posts, initialDisplayPosts = [] }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="max-w-screen divide-y divide-indigo divide-opacity-25 overflow-x-hidden font-sans dark:divide-teal">
        <Banner />
        <SectionContainer>
          <Intro />
        </SectionContainer>
        <SectionContainer>
          <div className="relative my-4 max-w-full">
            <label>
              <span className="sr-only">
                What do you want to look for on our site? (ex. Italy, Digital Nomad)
              </span>
              <input
                aria-label="What do you want to look for?"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="What do you want to look for on our site?"
                className="block h-[60px] w-full rounded-md border bg-white px-4 py-2 text-indigo focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:text-indigo"
              />
            </label>
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-indigo"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <ul className="mb-2 columns-1 gap-8 md:columns-2">
            {!displayPosts.length && 'No posts found.'}
            {displayPosts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, title, summary, tags, images } = post
              return (
                <li key={slug} className="py-2">
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
          <button className="theme-button float-right h-[48px] w-auto rounded-sm p-2 font-sans text-base font-medium leading-6">
            <Link href="/blog" aria-label="All posts">
              More, More, More
            </Link>
          </button>
        )}
      </SectionContainer>
    </>
  )
}
