import Link from 'next/link'
import { kebabCase } from 'pliny/utils/kebabCase'
const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="m-2 mr-3 bg-indigo p-1 text-sm font-medium uppercase text-primary-500 text-teal hover:text-white hover:opacity-80 dark:bg-teal dark:text-indigo dark:hover:text-black dark:hover:opacity-80"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}
export default Tag
