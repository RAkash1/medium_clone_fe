import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {
    const params = useParams()
    const [postInfo, setPostInfo] = useState()
    useEffect(() => {
      async function getPosts() {
        await fetch(`http://localhost:4000/post/${params.id}`, {
          method: 'GET',
          credentials: 'include',
        }).then((res) => res.json().then((data) => setPostInfo(data)))
      }
      getPosts()
      
    }, [])
    console.log(postInfo)

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',

      }}>
    {!postInfo ? 
    <div style={{width:'100vw',height:'90vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <h1>Loading...</h1>
    </div>
    :  
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      width:'50vw',
    }}><h1>{postInfo.title}</h1>
    <span style={{color:'grey',fontWeight:'bold'}}>{postInfo.author.username} | {postInfo.createdAt}</span>
    <p>{postInfo.summary}</p>
    <img src={`http://localhost:4000/${postInfo.cover}`} style={{width:'700px'}}/>
    <div dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
    
    }
    </div>
  )
}