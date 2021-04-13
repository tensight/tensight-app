import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'
import MDXComponents from '@/components/MDXComponents'
import Nav from '@/components/nav'
import { FileMDX } from '@/lib/mdx'

const InfoLayout = ({ mdxSource, frontMatter }: FileMDX) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  })

  return (
    <div className="w-screen h-screen p-5">
      <style jsx global>{`
          body {
            background-color: #e5e5e3;
          }
        `}
      </style>
      <Nav />
      <div className="flex flex-col justify-center mt-16">
        <div className="flex justify-center px-20">
          <div className="prose max-w-prose">
            {content}
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default InfoLayout