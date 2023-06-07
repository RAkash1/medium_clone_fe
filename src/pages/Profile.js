import React, { useEffect, useState } from 'react'
import ProfileCard from '../comp/profileCard'


export default function Profile() {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        async function getProfile() {
            await fetch('http://localhost:4000/profile', {
                method: 'GET',
                credentials: 'include'}).then((res) => res.json().then((data) => setPosts(data)))
        }
        getProfile()
    }, [])
    console.log(posts)
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    }}>
    { posts.map((post) => ( 
    <div>
    <ProfileCard {...post}/>
    </div>
    ))}
    </div>
    )
}
