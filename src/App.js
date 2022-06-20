import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./component/Logo";
import Navigation from "./component/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Logo />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/** path="*" fonctionne si jamais  l'url ne correspond à rien  */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
