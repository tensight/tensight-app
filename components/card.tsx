import Image from 'next/image';
import Link from 'next/link';
import { getAthleteData, getAthleteHeadshot } from '../lib/athletes';
import { countries } from '../data/countries';
import { getFlags } from '../lib/countries';

export default function Card({ athlete }) {
  return (
    <Link href={`/athlete/${encodeURIComponent(athlete.id)}`}>
      <a>
        <article id="card" className="flex relative space-x-4 flex-col w-64 p-5 min-w-64 rounded-l bg-gray-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <header id="card-header">
          <h2 className="text-lg">{athlete.athlete_id}</h2>
          <div className="mx-auto">
            <img className="w-full h-48 object-contain" src={getAthleteHeadshot(athlete.espnId, athlete.sport)}></img>
          </div>
          <h2 className="text-lg text-center font-semibold text-gray-800 font-serif">
            {athlete.firstName} {athlete.lastName}
          </h2>
          <dl className="flex flex-wrap justify-center text-gray-700">
            <dt className="">
              {athlete.nativeName == null ? '' : athlete.nativeName}
              <span className="text-xl">
                  &nbsp;{getFlags(athlete.heritage).join(' · ')}&nbsp; 
              </span>
            </dt>
          </dl>
          <dl className="flex flex-wrap justify-center text-gray-700">
            <dt className="text-center text-sm">{athlete.description}</dt>
          </dl>
        </header>
      </article>
      </a>
    </Link>
  ) 
};