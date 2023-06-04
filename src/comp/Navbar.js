import React,{useEffect,useContext} from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import {UserContext} from '../UserContext'
export default function Navbar() {
  const {users, setUsers} = useContext(UserContext)
  useEffect(() => {
    fetch('http://localhost:4000/user', 
    {method: 'get',
    credentials: 'include'}
    ).then(res => res.json()).then(data =>setUsers(data)).catch(err => console.log(err))
  }, [])
  
  const logout = () => {
    fetch('http://localhost:4000/logout',{method: 'post',credentials: 'include'})
    setUsers(null)
  }
  const username = users?.username
  // console.log(username)
  return (
    <div className='Navbar'>
        <span><Link to='/'>
        <img src={logo} style={{height:'40px',width:'40px'}}></img></Link></span>
        {username? 
        <div>
        <span className='navButton'>
        <Link to='/createPost' style={{color:'white',textDecoration:'none'}}>Write</Link>
        </span>
        <span className='navButton'><Link to='/profile' style={{color:'white',textDecoration:'none'}}>Profile</Link></span>
        <span className='navButton' onClick={logout} style={{color:'white',textDecoration:'none'}}>Logout {username}</span>
        </div>
        : 
        <span className='navButton'>
        <Link to='/login' style={{color:'white',textDecoration:'none'}}>
        Get Started
        </Link></span>}
    </div>
  )
}
