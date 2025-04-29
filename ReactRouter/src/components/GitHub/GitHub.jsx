import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = 
    useLoaderData()
    // const [data, setData] = React.useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ImKartikey27')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
            
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        GitHub Followers: {data.following}
        <img src = {data.avatar_url} width={300}/>
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ImKartikey27')
    return response.json();
}
