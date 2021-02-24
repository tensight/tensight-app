import Card from '../components/card';

export default function CardList({ athletes }) {
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