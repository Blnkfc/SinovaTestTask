import { useEffect, useState } from 'react';
import AnimalCard from './AnimalCard/page';

const catApiKey = 'live_QwPamaMhqLqtPX08VOp9uhyX4z2KiDFddss4VJmHFwqJRzFqEpvhmjVYGoYipfZB'
const dogApiKey = 'live_lK7NpXsT4DKWmwRrkAvZ4AwyicULDmQViwZtVmILHNHqU7gCbNQ7rgZ12IN2iHIA'
const catApiUrl = "https://api.thecatapi.com/v1/images/search?has_breeds=true&limit=4"
const dogApiUrl = "https://api.thedogapi.com/v1/images/search?has_breeds=true&limit=4"


export default async function Home() {
  const catHeaders = new Headers
  catHeaders.append('x-api-key', catApiKey)
  const dogHeaders = new Headers
  dogHeaders.append('x-api-key', dogApiKey)

  const getCats = async() => {
    const res = await fetch(catApiUrl,{headers:catHeaders})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }
  const getDogs = async() => {
    const res = await fetch(dogApiUrl,{headers:dogHeaders})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }

  const [cats, dogs] = await Promise.all([getCats(), getDogs()])


  return (
    <>
      <div className="grid grid-cols-2 gap-4 m-4
      xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2" >
        {cats.map((c: any, index: number) => { return <AnimalCard data={c} key={index} /> })}
        {dogs.map((d: any, index: number) => { return <AnimalCard data={d} key={index} /> })}

      </div>
    </>
  );
}
