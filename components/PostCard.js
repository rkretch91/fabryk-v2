import Image from './Image'
import Link from './Link'
const PostCard = ({ slug, title, summary, images }) => {
  const containsImages = images && images.length > 0
  return (
    <Link href={`/blog/${slug}`} aria-label={`Link to ${title}`}>
      <div
        className={`post-card relative h-[300px] overflow-hidden rounded-sm bg-indigo p-8 text-teal dark:bg-teal dark:text-indigo sm:drop-shadow-indigo dark:sm:drop-shadow-teal`}
      >
        {containsImages && (
          <>
            <Image
              src={images[0]}
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              style={{
                zIndex: 0,
              }}
            />
          </>
        )}
        <div
          className={`z-50 max-w-[90%] ${
            containsImages &&
            'post-card-title-wrapper absolute bottom-0 left-5 text-indigo opacity-80 dark:text-teal'
          }`}
        >
          <h2
            className={`text-md mb-4 font-bold sm:text-lg ${
              containsImages && 'max-w-[100%] bg-teal p-0.5 dark:bg-indigo'
            }`}
          >
            {title}
          </h2>
          {/* <div className="mb-4 flex gap-4 font-bold">
            {tags.slice(0, 3).map((tag) => (
              <p
                className={
                  'bg-teal p-1 font-sans text-xs sm:text-sm font-bold text-indigo opacity-90 dark:bg-indigo dark:text-teal'
                }
                key={tag}
              >
                {tag.toUpperCase()}
              </p>
            ))}
          </div> */}
          <div className="font-light">{!containsImages && <p>{summary}</p>}</div>
        </div>
      </div>
    </Link>
  )
}
export default PostCard
