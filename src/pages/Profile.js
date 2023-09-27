import React, { useEffect, useState } from "react";
import ProfileCard from "../comp/profileCard";
import { Link } from "react-router-dom";
import api from "../api";

export default function Profile() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getProfile() {
      await fetch(`${api}/profile`, {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json().then((data) => setPosts(data)));
    }
    getProfile();
  }, []);
  console.log(posts);
  return (
    <div>
      {posts.length === 0 ? (
        <div
          style={{
            width: "100vw",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <span style={{ fontSize: "50px", fontWeight: "bold", color: "grey" }}>
            NO POST
          </span>
          <div>
            <Link
              style={{
                textDecoration: "none",
                background: "linear-gradient(to right, #ff105f, #ffad06)",
                backgroundSize: "cover",
                backgroundClip: "text",
                color: "transparent",
              }}
              to="/createpost"
            >
              Create Post
            </Link>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {posts.map((post) => (
            <div>
              <ProfileCard {...post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
