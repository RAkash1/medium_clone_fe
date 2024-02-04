import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function Post() {
  console.log(api);
  const params = useParams();
  const [postInfo, setPostInfo] = useState();
  useEffect(() => {
    async function getPosts() {
      await fetch(`${api}/post/${params.id}`, {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json().then((data) => setPostInfo(data)));
    }
    getPosts();
  }, []);
  console.log(postInfo);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {!postInfo ? (
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50vw",
          }}
        >
          <h1>{postInfo.title}</h1>
          <span style={{ color: "grey", fontWeight: "bold" }}>
            {postInfo.author.username} | {postInfo.createdAt}
          </span>
          <p>{postInfo.summary}</p>
          <img
            src={postInfo.cover}
            style={{ width: "50vw", height: "auto" }}
          />
          <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
      )}
    </div>
  );
}
