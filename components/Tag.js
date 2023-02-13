import Link from 'next/link'
import { kebabCase } from 'pliny/utils/kebabCase'
const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="m-2 mr-3 bg-indigo p-1 text-sm font-medium uppercase text-primary-500 text-teal hover:text-primary-600 dark:bg-teal dark:text-indigo dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}
export default Tag
