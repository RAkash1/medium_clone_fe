import { UserContextProvider } from './UserContext';
import { BrowserRouter, Route , Routes } from 'react-router-dom';

import Navbar from './comp/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Profile from './pages/Profile';
import PostEdit from './pages/PostEdit';
import NoPage from './pages/NoPage';
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
        <Route path="/profile/postedite/:id" element={<PostEdit/>}/>
        <Route path="/profile/post/:id" element={<Post/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
      </BrowserRouter>
    </UserContextProvider>
    </div>
  );
}

export default App;
