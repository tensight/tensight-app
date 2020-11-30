import Nav from '../components/nav';
import Card from '../components/card';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { getSortedAthletesData } from '../lib/athletes'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      athletes: await getSortedAthletesData()
    }
  }
}

export default function IndexPage({ athletes }) {
  return (
    <div className="w-screen h-screen p-5">
      <Nav />
      <div className=""></div>
      <div className="py-10 text-center">
        <h1 className="text-5xl font-bold font-serif text-accent-1">
          Tensight
        </h1>
        <h2 className="text-2xl font-serif"> \ˈten-sīt \</h2>
      </div>
      <h2>I'm looking for a 
        <span></span>
      </h2>
      <section id="card-list" className="flex justify-items-start p-12 gap-2">
        {athletes.length > 0 ? (
          athletes.map((athlete) => (
            <Card 
              key={athlete.id}
              athlete={athlete}
            />
          ))
        ) : <p>Loading...</p>}
      </section>
    </div>
  )
}