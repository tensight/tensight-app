import Card from './card'
import { Athlete } from '@prisma/client'

export type athletesProps = Athlete[]

type Props = {
  athletes: athletesProps
}

const CardList = ({ athletes }: Props) => {
  return (
    <section id="card-list" className="flex flex-wrap justify-items-start justify-center p-12 gap-4">
      {typeof athletes !== 'undefined' && athletes.length > 0 ? (
        athletes.map((athlete) => (
          <Card
            key={athlete.id}
            athlete={athlete}
          />
        ))
      ) : <p>Loading...</p>}  
    </section>
  )
}

export default CardList