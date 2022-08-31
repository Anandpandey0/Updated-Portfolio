import React from 'react'
import { fetcher } from '../lib/api'

const getdata = () => {
  return (
    <div className='w-full h-screen text-center'>I am  a get data 
    {console.log("here")}</div>
  )
}


export default getdata
export async function getStaticProps(){
    const filmresponse = await fetcher(`http://localhost:1337/api/my-projects`);
    console.log(filmresponse);
    return{
        props:{
            films:filmresponse,
        },
    }
}
