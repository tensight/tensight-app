import Image from 'next/image'
import Link from 'next/link'
import { getAthleteData, getAthleteHeadshot } from '@/lib/athletes'
import { getFlags } from '@/lib/countries'
import { countries } from '@/data/countries'
import { Athlete } from '@prisma/client'

type Props = {
  athlete: Athlete
}

const Card = ({ athlete }: Props) => {
  return (
    <Link href={`/athlete/${encodeURIComponent(athlete.slug)}`}>
      <a>
        <article id="card" className="bg-white flex relative space-x-4 flex-col w-64 p-5 min-w-64 rounded-l transition duration-500 ease-in-out transform hover:-translate-y-2 hover:-translate-x-1 hover:shadow-xl hover:rotate-1 motion-reduce:transform-none" >
        <header id="card-header">
          <div className="mx-auto">
            <img className="w-full h-48 object-contain"
              src={getAthleteHeadshot(athlete.espnId, athlete.sport)}
              onError={(e) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src = "./athlete.png";
              }}
            ></img>
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
}

export default Card