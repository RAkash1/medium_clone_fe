import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserState } from "../UserContext";
import api from "../api";
export default function Login() {
  const navigate = useNavigate();
//userState

  const { users, setUsers } = UserState();

// user login data
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
//input change function
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }; 

//destructuring user
  const { email, password } = user;


//login function
  async function login(ev) {
    ev.preventDefault();
    let a = await fetch(`${api}/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-type": "application/json" },
      credentials: "include",
    });
    if (a.ok) {
      alert("login successfull !!!");
      a.json().then((userinfo) => setUsers(userinfo));
      // console.log(users)
      navigate("/");
    } else alert("login failed !!!");
    

  }
  return(
//if user is already logged in then redirect to home page
  users?.username? 
      navigate("/")
      : 
      <div className="container">
        <h2>LOGIN</h2>
        <form className="form" onSubmit={login}>
          <input
            type="email"
            className="in"
            placeholder="Enter Your email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
            required
            autoComplete="off"
          />
          <input
            type="password"
            className="in"
            placeholder="Enter Your password"
            name="password"
            value={password}
            onChange={(e) => onInputChange(e)}
            required
            autoComplete="off"
          />
          <button className="subtn">Submit</button>
        </form>
        <div>
          <Link className="linkto" to="/register">
            if you have account ?
          </Link>
        </div>
      </div>
  );
}
