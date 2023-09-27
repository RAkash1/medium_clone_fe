import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'

export default function Card({ _id, author, createdAt, title, summary, cover: image }) {
  return (
    <div className='card'>
      <div className='left'>
        <div>
          <span style={{ color: 'grey', fontWeight: 'bold', fontSize: '0.75rem' }}>{author.username} </span>
          | <span style={{ color: 'grey', fontWeight: 'bold', fontSize: '0.75rem' }}><ReactTimeAgo date={createdAt} locale="en-US" /></span>
        </div>
        <div>
          <h3 className='sum'>{title}</h3>
          <p className='sum'>{summary}</p>
        </div>
      </div>
      <div className='img'><Link to={`post/${_id}`}><img src={image} /></Link></div>
    </div>
  )
}
