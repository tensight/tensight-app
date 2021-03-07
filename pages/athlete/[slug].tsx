import Nav from '../../components/nav'
import AthleteHeader from '../../components/allAthletePages/athleteheader'
import FavoriteMomentList from '../../components/allAthletePages/favoritemomentlist'
import { getAllAthleteSlugs, getAthleteData, getEspnLeague, convertDateInFavMomentsToString, getAthleteFavMoments, FavoriteMomentsDateString } from '../../lib/athletes'
import { getSportOfAthlete } from '../../lib/sports'
import { Athlete, FavoriteMoment, Sport } from '@prisma/client'

export async function getStaticPaths() {
  const paths = await getAllAthleteSlugs()
  return {
    paths,
    fallback: false
  }
};

export async function getStaticProps({params}) {
  const athleteData: Athlete = await getAthleteData(params.slug)
  const sportOfAthlete: Sport = await getSportOfAthlete(params.slug)
  const favMomentsOfAthlete: FavoriteMoment[] = await getAthleteFavMoments(athleteData.id)
  const typeSafeFavMoments: FavoriteMomentsDateString[] = convertDateInFavMomentsToString(favMomentsOfAthlete)
  return {
    props: {
      athleteData,
      sportOfAthlete,
      typeSafeFavMoments
    }
  }
}

function getFavoriteMoments(moments: FavoriteMomentsDateString[]) {
  const newMoments = []
  moments.forEach((moment) => {
    newMoments.push(<div key={moment.id.toString()} className="m-8">{moment.description}</div>)
  })
  return newMoments
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
  typeSafeFavMoments: FavoriteMomentsDateString[]
}> = ({ athleteData, sportOfAthlete, typeSafeFavMoments }) => {
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
      <FavoriteMomentList favMoments={typeSafeFavMoments} />
      {athleteData && getLinks(athleteData)}
    </div>
  )
}

export default AthletePage
