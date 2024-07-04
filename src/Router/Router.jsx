// Router.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Page from "../components/Page";
import Navbar from "../components/Navbar";

const Links = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Page />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Links;
