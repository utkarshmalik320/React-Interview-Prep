import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
         const data = useLoaderData();
    // const [data, setData] = useState([]);
    //  useEffect (() =>{
    //     fetch ('https://dummyjson.com/products')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     } )
    // },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white
    p-4 text-3xl' >Github followers : {data.title}
    <img className='' src={data.thumbnail} alt=""  width ={300}/></div>
  )
}

export default Github

export const githubInfoLoader  = async () =>{
   const response =   await fetch ('https://dummyjson.com/products')
   return response.json()
}