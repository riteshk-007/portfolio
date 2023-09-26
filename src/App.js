import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimeCursor from "./components/AnimeCursor";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <AnimeCursor />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
