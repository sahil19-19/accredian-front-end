import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/home'
import Refer from './pages/refer/refer'
import About from "./pages/about/about";
// import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/refer" element={<Refer/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
