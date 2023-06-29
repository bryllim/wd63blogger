import { Link } from "react-router-dom";

function Register(){
    return(
        <>
            <h1 className="fw-bold">Register</h1>
            <p className="fw-bold mt-5">Username</p>
            <input type="text" className="form-control"/>
            <p className="fw-bold mt-3">Password</p>
            <input type="text" className="form-control"/>
            <p className="fw-bold mt-3">Confirm Password</p>
            <input type="text" className="form-control"/>
            <button className="btn btn-dark mt-3">Create account</button>
            <Link to="/" className="ms-3 align-middle">I have an account.</Link>
        </>
    )
}

export default Register;