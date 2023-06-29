import { useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Login/> } />
          <Route path="register" element={ <Register/> } />
          <Route path="home" element={ <Home/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
