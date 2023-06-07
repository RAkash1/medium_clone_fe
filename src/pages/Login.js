import React, { useState,useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {UserContext} from '../UserContext'
export default function Login() {
    const navigate = useNavigate();
    const {users,setUsers} = useContext(UserContext)

    const [user, setUser] = useState({
        email: "",
        password: "" 
      });

    const {email, password} = user;
    
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
      console.log(e.target.value);
    };

    async function login(ev) {
        ev.preventDefault();
        let a = await fetch('http://localhost:4000/login',{
          method : 'POST',
          body : JSON.stringify(user),
          headers : {'Content-type':'application/json'},
          credentials: 'include',
        })
        if(a.ok){
          alert('login successfull')
          a.json().then(userinfo => setUsers(userinfo));
          // console.log(users)
          navigate('/')
        }
        else alert('login failed failed')
        }
  return (
    <div className='container'>
        <h2>SIGN UP</h2>
        <form className="form" onSubmit={login}>
            <input
              type="email"
              className="in"
              placeholder="Enter Your email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
              required
              autoComplete='off'
            />
            <input
              type="password"
              className="in"
              placeholder="Enter Your password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
              required
              autoComplete='off'
            />  
          <button className="subtn">Submit</button>
        </form>
        <div ><Link className="linkto" to="/register">if you have account ?</Link></div>
        
    </div>
  )
}
