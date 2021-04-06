import fs from 'fs'
import { MdxRemote } from 'next-mdx-remote/types'
import renderToString from 'next-mdx-remote/render-to-string'
import matter from 'gray-matter'
import path from 'path'
import MDXComponents from '@/components/MDXComponents'

const root = process.cwd()

type FrontMatter = {
  wordCount: number,
  slug: string,
  title?: string,
  publishedAt?: string,
  by?: string
}

export type FileMDX = {
  mdxSource: MdxRemote.Source,
  frontMatter: FrontMatter
} | null

export async function getFileBySlug(type: string, slug: undefined|string): Promise<FileMDX> {
  const filePath: string = slug
    ? path.join(root, 'data', type, `${slug}.mdx`)
    : path.join(root, 'data', `${type}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    }
  })

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      slug: slug || null,
      ...data
    }
  }
}