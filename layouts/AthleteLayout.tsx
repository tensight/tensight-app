import { FrontMatter } from '../lib/mdx'
import hydrate from 'next-mdx-remote/hydrate'
import Image from 'next/image'
import MDXComponents from '../components/MDXComponents'
import { MdxRemote } from 'next-mdx-remote/types'
import { parseISO, format } from 'date-fns'


const AthleteLayout: React.FC<{ mdxSource: MdxRemote.Source, frontMatter: FrontMatter }> = ({
  mdxSource,
  frontMatter
}) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return (
    <article className="m-8">
      <div className="flex items-center my-2">
        <Image // TODO: change this to user
          alt='User 1'
          height={24}
          width={24}
          src="/user-1.jpg"
          className="rounded-full"
        />
        <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
          {frontMatter.by}
          {' / '}
          {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
        </p>
      </div>
      <div className="prose max-w-none w-full pr-4">
        {content}
      </div>
    </article>
  )
}

export default AthleteLayout