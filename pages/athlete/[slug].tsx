import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'
import AthleteLayout from '@/layouts/AthleteLayout'
import AthleteHeader from '@/components/athleteheader'
import Nav from '@/components/nav'
import FavoriteMomentList from '@/components/favoritemomentlist'
import { FavoriteMomentNoDateWithUser, getAllAthleteSlugs, getAthleteData, getAthleteFavMoments, getEspnLeague } from '@/lib/athletes'
import { getFlags } from '@/lib/countries'
import { FileMDX, getFileBySlug } from '@/lib/mdx'
import { getSportOfAthlete } from '@/lib/sports'
import { Athlete, Sport } from '@prisma/client'

type Props = {
  athleteData: Athlete,
  sportOfAthlete: Sport,
  favMoments: FavoriteMomentNoDateWithUser[],
  athleteProfile?: FileMDX
}

const AthletePage = ({ athleteData, sportOfAthlete, favMoments, athleteProfile }: Props) => {
  const { data } = useSWR(`/api/athlete/favoritemoments?id=${athleteData.id}`, { initialData: favMoments })
  
  return (
    <>
      <div className="w-screen h-screen p-5">
        <Head>
          <title>{athleteData.firstName} {athleteData.lastName} {getFlags(athleteData.heritage).join('  ')}</title>
          <meta charSet="UTF-8" />
          <meta name="description" content="Quickly discover athletes and their heritage" />
          <meta name="keywords" content={`Asian, Sports, Tensight, ${athleteData.firstName} ${athleteData.lastName}`} />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <style jsx global>{`
            body {
              background-color: #e5e5e3;
            }
          `}
        </style>
        <Nav />
        <div className="px-8">
          <AthleteHeader athleteData={athleteData} sportOfAthlete={sportOfAthlete} />
          { athleteProfile &&
            <AthleteLayout
              mdxSource={athleteProfile.mdxSource}
              frontMatter={athleteProfile.frontMatter}
            /> }
          <FavoriteMomentList favMoments={data} />
          {athleteData && getLinks(athleteData)}
        </div>
      </div>
    </>
  )
}

export default AthletePage

const getLinks = (athleteData: Athlete) => {
  const links = []
  if (athleteData.olympediaId) {
    links.push(<li key="olympedia"><a className="hover:underline" href={`http://www.olympedia.org/athletes/${athleteData.olympediaId}`}>Olympedia</a></li>)
  }
  if (athleteData.espnId) {
    links.push(<li key="espn"><a className="hover:underline" href={`https://espn.com/${getEspnLeague(athleteData.sport)}/player/_/id/${athleteData.espnId}`}>ESPN</a></li>)
  }
  return (
    <div className="p-8">
      <h4 className="text-2xl">Links</h4>
      <ul>
        {links}
      </ul>
    </div>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const athleteData: Athlete = await getAthleteData(params.slug)
  const sportOfAthlete: Sport = await getSportOfAthlete(params.slug)
  const favMoments: FavoriteMomentNoDateWithUser[] = await getAthleteFavMoments(athleteData.id)
  const athleteProfile: FileMDX = await getFileBySlug('athletes', params.slug)

  return {
    props: {
      athleteData,
      sportOfAthlete,
      favMoments,
      athleteProfile
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 30, // In seconds
  }
}

export async function getStaticPaths() {
  const paths = await getAllAthleteSlugs()
  return {
    paths,
    fallback: 'blocking'
  }
}