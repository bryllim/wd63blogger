import { useState, useEffect } from "react";
import PostForm from "./PostForm";
import Post from "./Post";

function Home() {
  const [user, setUser] = useState(null);
  const [user_id, setuser_id] = useState(localStorage.getItem("user_id"));
  const [posts, setPosts] = useState(null);

  const fetchUser = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/getuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data);
    }
  };

  const fetchPosts = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/fetchposts");

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }
  };

  const deletePost = async (post_id) => {
    const response = await fetch("http://127.0.0.1:8000/api/deletepost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post_id,
      }),
    });

    if (response.ok) {
      fetchPosts();
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      window.location.href = "/";
    } else {
      console.log(user_id)
      fetchUser();
      fetchPosts();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    window.location.href = "/";
  };

  return (
    <>
      <h1 className="fw-bold">Home</h1>
      {
        (user === null) ? "" : <p>Welcome back, {user.name}!</p>
      }
      
      <button onClick={handleLogout} className="btn btn-light btn-sm">
        Logout
      </button>
      <hr />
      <PostForm fetchPosts={fetchPosts} />
      <hr />
      {
        (posts === null) ? "" : 
        posts.map((post) => (
            <Post
              key={post.id}
              post_id={post.id}
              content={post.content}
              posted_at={post.posted_at}
              author={post.user}
              deletePost={deletePost}
            />
          ))
      }
    </>
  );
}

export default Home;
