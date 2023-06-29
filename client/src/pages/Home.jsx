function Home(){

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href="/";
    }

    return(
        <>
        <h1 className="fw-bold">Home</h1>
        <p>Welcome back, username!</p>

        <button onClick={handleLogout} className="btn btn-dark btn-sm">Logout</button>
        </>
    )
}

export default Home;