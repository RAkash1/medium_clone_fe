import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
export default function Card({_id ,author, createdAt, title, summary, cover:image}) {
  return (
    <div className='card'>
    <div className='left'>
    <div>
    <span style={{color:'grey',fontWeight:'bold'}}>{author.username} </span> 
    | <span style={{color:'grey',fontWeight:'bold'}}>{createdAt}</span>
    </div>
        <div>
            <p>{title}</p>
            <p className='sum'>{summary}</p>
        </div>
    </div>
        <div className='img'><Link to={`post/${_id}`}><img src={`http://localhost:4000/${image}`}/></Link></div>
    </div>
  )
}
