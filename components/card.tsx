import Image from 'next/image'

export default function Card({ athlete }) {
 return (
   <article id="card" className="flex relative space-x-4 flex-col w-64 p-6 min-w-64 rounded-l bg-gray-200 shadow-lg hover:translate-y-1">
     <header id="card-header">
        <h2 className="text-lg">{athlete.athlete_id}</h2>
        <img src="https://a.espncdn.com/combiner/i?img=/i/headshots/tennis/players/full/2789.png" height="50"></img>
        <h2 className="text-lg font-semibold text-gray-800">
         {athlete.firstName} {athlete.lastName}
        </h2>
        <dl className="flex flex-wrap">
          <dt className="text-gray-600">{athlete.nativeName}</dt>
          <dt>{athlete.description}</dt>
        </dl>
     </header>
   </article>
 ) 
}