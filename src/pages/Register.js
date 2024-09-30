import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import './loreg.css'
export default function Register() {
    const Navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "" 
      });
      const { name, email, password} = user;

      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(e.target.value);
      };
        
      async function register(ev){
        ev.preventDefault();
        console.log(user);
        let a=await fetch('https://megamix-be.vercel.app/register',{
          method : 'POST',
          body : JSON.stringify( user),
          headers : {'Content-type':'application/json'}
        })
        if(a.status===201){
          alert('registration successfull')
          Navigate('/login')
        }
        else alert('registration failed')
      }
  return (
    <div className='container'>
        <h2>SIGN UP</h2>
        <form className="form" onSubmit={register}>
            <input
              type="text"
              className="in"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
              required
              autoComplete='off'
            />
            <input
              type="text"
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
        <div >
        <Link className="linkto" to="/login">if you have account ?</Link>
        </div>
    </div>
  )
}
