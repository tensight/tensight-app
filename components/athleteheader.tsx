import { getAthleteHeadshot } from '@/lib/athletes'
import { getFlag, getCountryName } from '@/lib/countries'
import { Athlete, Sport } from '@prisma/client'
import Image from 'next/image'

type Props = {
  athleteData: Athlete,
  sportOfAthlete: Sport
}

const AthleteHeader = ({athleteData, sportOfAthlete}: Props) => {
  return (
    <div className=" text-xl m-8 flex flex-col md:flex-row items-center w-auto p-2 border-solid border-4 border-gray-700 border-opacity-50 rounded-md lg:w-3/5">
      <div id="athleteHeadshot" className="m-1 min-w-[180px]">
        <Image
          src={getAthleteHeadshot(athleteData.headshotUrl, athleteData.espnId, athleteData.sport)}
          width={240}
          height={180}
          layout="intrinsic"
          objectFit="contain"
        >
        </Image>
      </div>
      <div id="athleteVitals" className="flex flex-col justify-between h-48 m-1 py-2">
          <div className="p-0 m-0">
            <h1 className="font-serif font-semibold text-4xl">{`${athleteData.firstName} ${athleteData.lastName}`}</h1>
          </div>
          <div className={athleteData.nativeName == null ? "hidden" : "font-serif text-gray-600"}>
            <h3 className="font-serif text-gray-600">{athleteData.nativeName == null ? '' : `(${athleteData.nativeName})`}</h3>
          </div>
          <div>
            <h3 className="font-serif text-gray-600">{athleteData.description == null ? '' : athleteData.description}</h3>
          </div>
          <div className="font-serif flex">
            Heritage: {convertFlagsToJSX(athleteData.heritage)}
          </div>
          <div>
            <h3 className="font-serif">Sport: {sportOfAthlete.sport}</h3>
          </div>
        </div>
    </div>
  )
}

export default AthleteHeader

const convertFlagsToJSX = (countryIds: string[]) => {
  const newFlags = []
  countryIds.forEach((id) => {
    newFlags.push(
      <div key={id} className="has-tooltip mx-1 pointer-events-auto">
        <span className="tooltip rounded shadow-lg p-1 text-lg bg-gray-200 text-gray-800 -mt-8">{getCountryName(id)}</span>
        {getFlag(id)}
      </div>
    )
  })
  return newFlags
}