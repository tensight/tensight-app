import { Athlete, Sport } from '@prisma/client'
import AthleteHeader from '../../components/allAthletePages/athleteheader'
import FavoriteMomentList from '../../components/allAthletePages/favoritemomentlist'
import { FavoriteMomentNoDateWithUser, getAllAthleteSlugs, getAthleteData, getAthleteFavMoments, getEspnLeague } from '../../lib/athletes'
import Nav from '../../components/nav'
import { getSportOfAthlete } from '../../lib/sports'
import useSWR from 'swr'

export async function getStaticPaths() {
  const paths = await getAllAthleteSlugs()
  return {
    paths,
    fallback: false
  }
};

export async function getStaticProps({ params }) {
  const athleteData: Athlete = await getAthleteData(params.slug)
  const sportOfAthlete: Sport = await getSportOfAthlete(params.slug)
  const favMoments: FavoriteMomentNoDateWithUser[] = await getAthleteFavMoments(athleteData.id)
  
  return {
    props: {
      athleteData,
      sportOfAthlete,
      favMoments
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}

function getLinks(athleteData: Athlete) {
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

const AthletePage: React.FC<{
  athleteData: Athlete,
  sportOfAthlete: Sport,
  favMoments: FavoriteMomentNoDateWithUser[]
}> = ({ athleteData, sportOfAthlete, favMoments }) => {
  const { data } = useSWR(`/api/athlete/favoritemoments?id=${athleteData.id}`, { initialData: favMoments })
  console.log(data)

  return (
    <div className="w-screen h-screen p-5">
      <style jsx global>{`
          body {
            background-color: #e5e5e3;
          }
        `}
      </style>
      <Nav />
      <AthleteHeader athleteData={athleteData} sportOfAthlete={sportOfAthlete} />
      <FavoriteMomentList favMoments={data} />
      {athleteData && getLinks(athleteData)}
    </div>
  )
}

export default AthletePage
