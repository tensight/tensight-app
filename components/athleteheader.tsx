import React from 'react'
import { getAthleteHeadshot } from '../lib/athletes'
import { getFlag, getCountryName } from '../lib/countries'
import { Athlete, Sport } from '@prisma/client'

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

const AthleteHeader: React.FC<{athleteData: Athlete, sportOfAthlete: Sport}> = ({athleteData, sportOfAthlete}) => {
  return (
    <div>
      <div className="text-2xl m-8">
        <div className="flex flex-row items-center w-1/2 p-2 border-solid border-4 border-gray-700 border-opacity-50">
          <div className="m-1">
            <img className="h-48 object-contain"
                 src={getAthleteHeadshot(athleteData.espnId, athleteData.sport)}
                 onError={(e) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (e.target as HTMLImageElement).src = "./athlete.png";
                 }}
            ></img>
          </div>
          <div id="athleteVitals" className="m-1">
            <div className="p-0 m-0">
              <h1 className="font-serif font-semibold text-4xl">{`${athleteData.firstName} ${athleteData.lastName}`}</h1>
            </div>
            <div>
              <h3 className="text-gray-600">{athleteData.nativeName == null ? '' : `(${athleteData.nativeName})`}</h3>
            </div>

            <div>
              <h3 className="text-gray-600">{athleteData.description == null ? '' : athleteData.description}</h3>
            </div>
            <div className="flex">
              Heritage: {convertFlagsToJSX(athleteData.heritage)}
            </div>
            <div>
              <h2 className="">Sport: {sportOfAthlete.sport}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AthleteHeader
