import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (password === confirmpassword) {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if(response.ok){
        window.location.href="/";
      }
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <>
      <h1 className="fw-bold">Register</h1>
      <form onSubmit={handleRegister}>
        <p className="fw-bold mt-5">Name</p>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <p className="fw-bold mt-3">Confirm Password</p>
        <input
          type="password"
          className="form-control"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
          required
        />
        {isLoading ? (
          <button type="submit" disabled className="btn btn-dark mt-3">
            Registering...
          </button>
        ) : (
          <button type="submit" className="btn btn-dark mt-3">
            Create account
          </button>
        )}

        <Link to="/" className="ms-3 align-middle">
          I have an account.
        </Link>
      </form>
    </>
  );
}

export default Register;
