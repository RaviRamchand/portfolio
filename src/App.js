import React from "react";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App