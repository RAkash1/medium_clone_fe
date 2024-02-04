import React, { useEffect, useState } from "react";
import Card from "../comp/Card";
import api from "../api";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    async function getPosts() {
      await fetch(`${api}/post`, {
        method: "GET",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }

    getPosts();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    console.log(posts);
  }, []);
  console.log(posts);
  return (
    <>
      {Loading ? (
        <div
          style={{
            width: "100vw",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Loading...</h1>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          {posts.map((post,index) => (
            <Card key={index} {...post} />
          ))}
        </div>
      )}
    </>
  );
}
