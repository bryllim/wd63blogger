import { Link } from "react-router-dom";

function Login(){
    return(
        <>
            <h1 className="fw-bold">Login</h1>
            <p className="fw-bold mt-5">Username</p>
            <input type="text" className="form-control"/>
            <p className="fw-bold mt-3">Password</p>
            <input type="text" className="form-control"/>
            <button className="btn btn-dark mt-3">Login</button>
            <Link to="/register" className="ms-3 align-middle">Create an account</Link>
        </>

    )
}

export default Login;