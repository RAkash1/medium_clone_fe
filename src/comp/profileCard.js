import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import api from "../api";

export default function ProfileCard({ _id, createdAt, title, cover: image }) {
    const deletePost = async (ev) => {
        const response = await fetch(`${api}/post/${ev.target.id}`, {
            method: "DELETE",
            credentials: "include",
        });

        console.log(response);
        if (response.ok) {
            alert("post deleted !!!");
            window.location.reload(false);
        }
    };

    return (
        <div className="card">
            <div
                className="img"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Link to={`post/${_id}`}>
                    <img src={{image}} />
                </Link>
            </div>
            <div
                className="right"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <span style={{ color: "grey", fontWeight: "bold" }}>
                    <ReactTimeAgo date={createdAt} locale="en-US" />
                </span>
                <span>{title}</span>
                <div>
                    <button
                        id={_id}
                        onClick={deletePost}
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            width: "60px",
                            marginRight: "10px",
                        }}
                    >
                        Delete
                    </button>
                    <button
                        id={_id}
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            width: "60px",
                            marginRight: "10px",
                        }}
                    >
                        <Link
                            to={`postedite/${_id}`}
                            style={{
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            Edit
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
