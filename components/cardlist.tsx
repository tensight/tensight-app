import Card from '../components/card'
import { Athlete } from '@prisma/client'

export type athletesProps = Athlete[]

const CardList: React.FC<{athletes: athletesProps}> = ({ athletes }) => {
  return (
    <section id="card-list" className="flex flex-wrap justify-items-start justify-center p-12 gap-2">
      {athletes.length > 0 ? (
        athletes.map((athlete) => (
          <Card
            key={athlete.id}
            athlete={athlete}
          />
        ))
      ) : <p>Loading...</p>}  
    </section>
  );
}

export default CardList