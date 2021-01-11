import Nav from '../../components/nav';
import { getAllAthleteIds, getAthleteData, getEspnLeague } from '../../lib/athletes';
import { getFlags } from '../../lib/countries';
import { getSportOfAthlete } from '../../lib/sports';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getStaticPaths() {
  const paths = await getAllAthleteIds(prisma);
  return {
    paths,
    fallback: false
  }
};

export async function getStaticProps({params}) {
  const athleteData = await getAthleteData(prisma, parseInt(params.id))
  const sportOfAthlete = await getSportOfAthlete(prisma, parseInt(params.id))
  console.log(athleteData);
  return {
    props: {
      athleteData,
      sportOfAthlete
    }
  }
};

function getLinks(athleteData) {
  const links = [];
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
  );
};

export default function AthletePage({ athleteData, sportOfAthlete }) {
  return (
    <div className="w-screen h-screen p-5">
      <Nav />
      <div className="flex justify-between text-2xl m-8 p-4 border-solid border-4 border-gray-700 border-opacity-50">
        <div id="athleteVitals">
          <div className="flex">
            <h1 className="font-bold">{`${athleteData.firstName} ${athleteData.lastName}`}</h1>
            <h2 className=""></h2>
            <h3 className="text-gray-600">&nbsp;{athleteData.nativeName == null ? '' : `(${athleteData.nativeName})`}</h3>
            <h3 className="text-gray-600">&nbsp;{athleteData.description == null ? '' : ' · ' + athleteData.description}</h3>
          </div>
          <div className="flex">
            Heritage: {getFlags(athleteData.heritage).join(' · ')}
          </div>
          <div>
            <h2 className="">Sport: <mark>{sportOfAthlete.sport}</mark></h2>
          </div>
        </div>
      </div>
      {getLinks(athleteData)}  
    </div>
  )
}