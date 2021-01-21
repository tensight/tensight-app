import Nav from '../components/nav';
import Card from '../components/card';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getSortedAthletesData } from '../lib/athletes';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      athletes: await getSortedAthletesData(prisma)
    }
  }
}

export default function IndexPage({ athletes }) {
  return (
    <div className="w-screen h-screen p-5 def-bg">
      <style jsx global>{`
          body {
            background-color: #e5e5e3;
          }
        `}
      </style>
      <Nav />
      <div className=""></div>
      <div className="py-10 text-center">
        <h1 className="text-5xl font-bold font-serif text-accent-1">
          Tensight
        </h1>
        <h2 className="text-2xl font-serif"> \ˈten-sīt \ (noun): a concept that describes sports and it's athletes as a <mark>global affair</mark>. 🌎</h2>
      </div>
      <div className="px-12">
        <h2 className="font-serif text-center">I'm looking for a 
          <span></span>
        </h2>
      </div>
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
      <Footer /> 
    </div>
  )
}