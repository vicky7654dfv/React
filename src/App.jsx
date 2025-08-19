import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="header">
          <Link to="/">Home</Link> <br /> <br />
          <Link to="/About">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/About/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
