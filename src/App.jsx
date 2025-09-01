import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Features  from "./components/Features";
import Pages from "./components/Pages";
import Support from "./components/Support";
import NotFoundPage from "./components/NotFoundPage";
import Navbar from "./components/Navbar"; 

import './App.css'


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <main className="md:max-w-7xl mx-auto px-5 md:px-3">
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/features" element={<Features />} exact />
      <Route path="/pages" element={<Pages />} exact />
      <Route path="/support" element={<Support />} exact />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
    </main>
  </BrowserRouter>
  )
}

export default App
