import React from 'react'
import { useEffect, useState } from 'react'
import CardList, { athletesProps } from '../components/homePage/cardlist' 
import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'

const IndexPage: React.FC = () => {
  const [search, setSearch] = useState("")
  const [athletes, setAthletes] = useState([])
  // const [athleteCards, setCards] = useState<Element>(<CardList />)

  useEffect(() => {
    const getAthletes = async (searchWord) => {
      const response = await fetch(`/api/meili/athletes?q=${encodeURIComponent(searchWord)}`, {
        method: 'GET'
      });
      return response.json()
    };
    getAthletes(search)
      .then(data => {
        setAthletes(data.hits)
      });
  }, [search]);

  // useEffect(() => {
  //   setCards(<CardList athletes={athletes} />)
  // }, [athletes]);


  return (
    <div className="w-screen h-screen p-5 def-bg">
      <Head>
        <title>Tensight</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Quickly discover athletes and their heritage" />
        <meta name="keywords" content="Asian, Sports, Tensight" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <style jsx global>{`
          body {
            background-color: #e5e5e3;
          }
        `}
      </style>
      <Nav />
      <div className=""></div>
      <div className="py-10 text-center">
        <div className="flex justify-center my-4"><img className="self-center" src="./tensight-hero.svg" width="300" /></div>
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
        <div className="text-center py-4 px-2 w-full shadow-2xl lg:w-1/2 border-4 border-indigo-700 border-opacity-100">
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
              onChange={(event) => setSearch(event.target.value)}
              className="px-6 py-4 w-full text-black rounded-md"
              placeholder="손흥민, Yuta Watanabe, CN, ..."
            />
          </div>
        </div>
      </div>
      <div>
        <CardList athletes={athletes} />
      </div>
      <div className="">
        <h2 className="text-center text-xl font-serif">Favorite athlete missing? <a className="hover:underline" href="https://airtable.com/shrSgvaQ5Aj5892Wx">Submit it to the database!</a></h2>
      </div>
      <Footer />  
    </div>
  )
}

export default IndexPage