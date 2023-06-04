import React, { useEffect, useState } from 'react'
import Card from '../comp/Card'

export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function getPosts() {
      const response = await fetch('http://localhost:4000/post', {
        method: 'GET',
        credentials: 'include',
      }).then((res) => res.json()).then((data) => setPosts(data))
      
    }
    getPosts()
    console.log(posts)
  }, [])
  console.log(posts)
  return (
    <div style={{width:'100%', display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",paddingTop:'20px'}}>
      {posts.map((post) => ( <Card {...post} />))}
   
    </div>
  )
}
