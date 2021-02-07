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
  const [searchedWord, setSearch] = useState([]);
  const [resultSearch, setResults] = useState([]);
  const [resultCards, setCards] = useState([]);


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
        <br></br>
        <div className="flex flex-inline justify-center">
          <h2 className="text-2xl font-serif">Search the data for your favorite athlete/country below &nbsp;</h2>
          <svg className="animate-bounce w-6 h-6 text-amber-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      <div className="mt-4 px-12 flex justify-center">
        <div className="text-center p-4 w-full shadow-2xl lg:w-1/2 border-4 border-indigo-700 border-opacity-100">
          <h2 className="text-center">I'm looking for</h2>
          <div className="border rounded overflow-hidden flex justify-center mx-auto searchBox mt-6">
            <button className="flex items-center justify-center px-4 shadow-md text-black">
              <svg
                className="h-4 w-4 text-grey-dark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
            <input
              type="text"
              // value={searchedWord}
              // onChange={(event) => setSearch(event.target.value)}
              className="px-6 py-4 w-full text-black rounded-md"
              placeholder="손흥민, Yuta Watanabe, China, ..."
            />
          </div>
        </div>
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