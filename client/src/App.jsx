import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Login /> } />
          <Route path="register" element={ <Register /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;