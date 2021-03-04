import Nav from '../../components/nav'
import AthleteHeader from '../athlete/athleteheader'
import { getAllAthleteSlugs, getAthleteData, getEspnLeague } from '../../lib/athletes'
import { getSportOfAthlete } from '../../lib/sports'
import { Athlete, Sport } from '@prisma/client'

export async function getStaticPaths() {
  const paths = await getAllAthleteSlugs()
  return {
    paths,
    fallback: false
  }
};

export async function getStaticProps({params}) {
  const athleteData = await getAthleteData(params.slug)
  const sportOfAthlete = await getSportOfAthlete(params.slug)
  return {
    props: {
      athleteData,
      sportOfAthlete
    }
  }
}

function getLinks(athleteData) {
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

const AthletePage: React.FC<{athleteData: Athlete, sportOfAthlete: Sport}> = ({ athleteData, sportOfAthlete }) => {
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
      {getLinks(athleteData)}  
    </div>
  )
}

export default AthletePage
