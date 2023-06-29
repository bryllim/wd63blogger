import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Register from './Register';
import Login from './Login';
import NoPage from './NoPage';
import Layout from './Layout';

function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Login />}/>
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index;