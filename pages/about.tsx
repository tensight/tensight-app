import InfoLayout from '@/layouts/InfoLayout'
import { FileMDX, getFileBySlug } from '@/lib/mdx'

type Props = {
  aboutContent: FileMDX
}

const AboutPage = ({ aboutContent }: Props) => {
  return (
    <InfoLayout {...aboutContent}/>
  )
}

export default AboutPage

export async function getStaticProps() {
  const aboutContent: FileMDX = await getFileBySlug('info', 'about')

  return {
    props: {
      aboutContent
    }
  }
}