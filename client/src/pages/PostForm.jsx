import { useState } from 'react';

export default function PostForm({fetchPosts}){

    const [post, setPost] = useState('');
    const [user_id, setuser_id] = useState(
        localStorage.getItem("user_id")
    );

    const handleNewPost = async (e) => {
        e.preventDefault();
    
        const response = await fetch("http://127.0.0.1:8000/api/newpost", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            post,
            user_id,
          }),
        });
    
        const data = await response.json();

        if (data.success) {
            setPost('');
            fetchPosts();
        } else {
          alert("Post failed!");
        }
      };

    return (
        <form onSubmit={handleNewPost}>
        <input 
            type="text"
            className="form-control shadow p-3 my-3"
            placeholder="Write something..."
            value={post}
            onChange={(e) => setPost(e.target.value)}
            required
        />
        <button className="btn btn-dark btn-sm">Post</button>
        </form>
    )
}