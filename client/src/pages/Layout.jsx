import { Outlet, Link } from 'react-router-dom';

export default Layout = () => {
    return (
        <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/home">Home</Link>
            <Outlet/>
        </>
    )
}