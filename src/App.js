import "./App.css";
import { Login } from "./MyComponents/Login";
import { SignUp } from "./MyComponents/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Welcome } from "./MyComponents/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
        <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Welcome />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
