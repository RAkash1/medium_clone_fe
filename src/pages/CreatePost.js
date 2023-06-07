import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Editor from "../comp/Editor";
import './create.css'
import {UserContext} from '../UserContext'
import {useContext} from 'react'
export default function CreatePost() {
  const Navigate = useNavigate();
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const {users, setUsers} = useContext(UserContext)
  console.log(users)
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    console.log(files[0]);
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      Navigate('/');
    }
  }
  return (
    <>
    {!users.username? Navigate('/login') : 
    <form onSubmit={createNewPost} className='createform'>
    <h1>CREATE YOUR POST</h1>
      <input type="title"
             placeholder={'Title'}
             value={title}
             onChange={ev => setTitle(ev.target.value)}
             required
            />
      <input type="summary"
             placeholder={'Summary'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)} 
              required
             />
      <input type="file"
             onChange={ev => setFiles(ev.target.files)} 
             style={{width:'500px',fontSize:"1.25rem"}} 
              required
             />
      <Editor value={content} onChange={setContent}/>
      <button style={{marginTop:'70px',backgroundColor:'black',color:'white'}}>Create post</button>
    </form>}
    </>
  );
}
