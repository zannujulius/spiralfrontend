import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./screens/Landing";
import Features from "./screens/Features";
import Sections from "./screens/Sections";
import Blog from "./screens/Blog";
import BlogDetails from "./screens/Blog/BlogDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/features" element={<Features />} />
      <Route path="/services" element={<Sections />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
    </Routes>
  );
}

export default App;
