import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const data = await response.json();
    alert(data.success);
    if(data.success){
        localStorage.setItem('token', data.token);
        window.location.href="/home";
    }else{
        alert("Login failed!");
    }
    
  }

  return (
    <>
      <h1 className="fw-bold">Login</h1>
      <form onSubmit={handleLogin}>
        <p className="fw-bold mt-5">Email</p>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p className="fw-bold mt-3">Password</p>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-dark mt-3">Login</button>
        <Link to="/register" className="ms-3 align-middle">
          Create an account
        </Link>
      </form>
    </>
  );
}

export default Login;
