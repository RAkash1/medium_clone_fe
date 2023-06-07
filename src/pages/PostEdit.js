import 'react-quill/dist/quill.snow.css';
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Editor from "../comp/Editor";
import { useParams } from 'react-router-dom';
import {UserContext} from '../UserContext'
import {useContext} from 'react'
import './create.css'

export default function PostEdit() {
  const params = useParams();
  const Navigate = useNavigate();
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [data,setData] = useState('');
  const {users} = useContext(UserContext)
  console.log(users)
  useEffect(() => {
    async function getPosts() {
      await fetch(`http://localhost:4000/post/${params.id}`, {
        method: 'GET',
        credentials: 'include',
      }).then((res) => res.json().then((data) =>  { setTitle(data?.title)
      setSummary(data?.summary)
      setContent(data?.content)
      setData(data)
  }))
    }
    getPosts()
    
  }, [])
  async function editPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    if(files?.length > 0){
      data.set('file', files[0]);
    }
    ev.preventDefault();
    const response = await fetch(`http://localhost:4000/post/${params.id}`, {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      Navigate('/');
    }
  }

  return (
    <>
    {!users.username? Navigate('*') : 
    <form onSubmit={editPost} className='createform'>
    <h1>EDIT YOUR POST</h1>
      <input type="title"
             placeholder={'Title'}
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
      <input type="summary"
             placeholder={'Summary'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)} />
      <input type="file"
             onChange={ev => setFiles(ev.target.files)}  />
      <Editor value={content} onChange={setContent}/>
      <button style={{marginTop:'70px',backgroundColor:'black',color:'white'}}>Edit post</button>
    </form>
    }
    </>
  );
}

