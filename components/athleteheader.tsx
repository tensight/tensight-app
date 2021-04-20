import { getAthleteHeadshot } from '@/lib/athletes'
import { getFlag, getCountryName } from '@/lib/countries'
import { Athlete, Sport } from '@prisma/client'

type Props = {
  athleteData: Athlete,
  sportOfAthlete: Sport
}

const AthleteHeader = ({athleteData, sportOfAthlete}: Props) => {
  return (
    <div className="w-auto lg:w-3/5">
      <div className="text-xl m-8">
        <div className="flex flex-row items-center w-full p-2 border-solid border-4 border-gray-700 border-opacity-50">
          <div className="m-1 min-w-min">
            <img className="h-48 object-contain"
                 src={getAthleteHeadshot(athleteData.headshotUrl, athleteData.espnId, athleteData.sport)}
                 onError={(e) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (e.target as HTMLImageElement).src = "./athlete.png";
                 }}
            ></img>
          </div>
          <div id="athleteVitals" className="flex flex-col justify-between h-48 m-1 py-2">
            <div className="p-0 m-0">
              <h1 className="font-serif font-semibold text-4xl">{`${athleteData.firstName} ${athleteData.lastName}`}</h1>
            </div>
            <div>
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