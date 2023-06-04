import React, { useEffect, useState } from 'react'
import Card from '../comp/Card'
import { useNavigate } from 'react-router-dom'


export default function Profile() {
    const Navigate = useNavigate()
    const [posts,setPosts] = useState([])
    useEffect(() => {
        async function getProfile() {
            await fetch('http://localhost:4000/profile', {
                method: 'GET',
                credentials: 'include'}).then((res) => res.json().then((data) => setPosts(data)))
        }
        getProfile()
    }, [])
    const deletePost = async(e) => {
        const response = await fetch(`http://localhost:4000/post/${e.target.id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        
        console.log(response)   
        if(response.ok){
            window.location.reload(false);
    }}
    console.log(posts)
  return (
    <div>
    {posts.map((post) => (  <div>
    <Card {...post} />
    <button id= {post._id} onClick={deletePost}>Delete</button>
    <button>edit</button>
    </div>))}
    </div>
    )
}
