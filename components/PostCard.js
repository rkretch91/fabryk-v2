import Image from './Image'
import Link from './Link'
const PostCard = ({ slug, title, summary, tags, images }) => {
  const containsImages = images && images.length > 0
  return (
    <Link href={`/blog/${slug}`} aria-label={`Link to ${title}`}>
      <div
        className={`md dark:drop-shadow-teal} h-[300px] w-full
         overflow-hidden rounded-md bg-indigo bg-cover p-8 text-teal drop-shadow-indigo hover:scale-105 dark:bg-teal dark:text-indigo dark:drop-shadow-teal`}
      >
        {containsImages && (
          <>
            <Image
              src={images[0]}
              alt={title}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </>
        )}
        <div
          className={`${
            containsImages && 'absolute bottom-0 left-4 z-50 max-w-[90%] text-indigo dark:text-teal'
          }`}
        >
          <h2
            className={`mb-4 text-sm font-bold sm:text-lg ${
              containsImages && 'max-w-[100%] bg-teal p-2 dark:bg-indigo'
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
