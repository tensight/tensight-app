import Nav from '../../components/nav';
import { getAllAthleteSlugs, getAthleteData, getAthleteHeadshot, getEspnLeague } from '../../lib/athletes';
import { getFlags } from '../../lib/countries';
import { getSportOfAthlete } from '../../lib/sports';

export async function getStaticPaths() {
  const paths = await getAllAthleteSlugs();
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
      <style jsx global>{`
          body {
            background-color: #e5e5e3;
          }
        `}
      </style>
      <Nav />
      <div>
        <div className="text-2xl m-8">
          <div className="flex flex-row items-center w-6/12 p-4 border-solid border-4 border-gray-700 border-opacity-50">
            <div className="">
              <img className="h-48 object-contain" src={getAthleteHeadshot(athleteData.espnId, athleteData.sport)}></img>
            </div>
            
            <div id="athleteVitals">
              <div className="flex">
                <div>
                  <h1 className="font-bold">{`${athleteData.firstName} ${athleteData.lastName}`}</h1>
                </div>
                <div>
                  <h3 className="text-gray-600">&nbsp;{athleteData.nativeName == null ? '' : `(${athleteData.nativeName})`}</h3>
                </div>
              </div>
              <div>
                <h3 className="text-gray-600">{athleteData.description == null ? '' : athleteData.description}</h3>
              </div>
              <div className="flex">
                Heritage: {getFlags(athleteData.heritage).join(' · ')}
              </div>
              <div>
                <h2 className="">Sport: <mark>{sportOfAthlete.sport}</mark></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {getLinks(athleteData)}  
    </div>
  )
}