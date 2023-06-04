import { UserContextProvider } from './UserContext';
import { BrowserRouter, Route , Routes } from 'react-router-dom';

import Navbar from './comp/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
    <UserContextProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/createPost" element={<CreatePost/>}/>
        <Route path="/post/:id" element={<Post/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </UserContextProvider>
    </div>
  );
}

export default App;
