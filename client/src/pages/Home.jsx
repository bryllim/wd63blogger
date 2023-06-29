import { useState, useEffect } from 'react';

function Home(){

    const [user, setUser] = useState(null);
    const [user_id, setuser_id] = useState(
        localStorage.getItem("user_id")
    );

    useEffect(()=>{
        if (localStorage.getItem("token") === null) {
            window.location.href="/";
        }else{
            
            const fetchUser = async () => {
                const response = await fetch('http://127.0.0.1:8000/api/getuser', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      user_id
                    }),
                });

                if(response.ok){
                    const data = await response.json();
                    console.log("test");
                    console.log(data);
                    setUser(data);
                }
            }

            fetchUser();
        }

    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        window.location.href="/";
    }

    return(
        <>
        <h1 className="fw-bold">Home</h1>
        <p>Welcome back, !</p>

        <button onClick={handleLogout} className="btn btn-dark btn-sm">Logout</button>
        </>
    )
}

export default Home;