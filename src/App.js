import React, { useState } from "react";
import "./App.scss"
import { Routes, Route } from "react-router-dom";
import BLog from "./components/Blog/Blog";
import Navbars from "./components/Navbars/Navbars";
import Homes from "./Homes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Info from "./components/Info/Info";
import Login from "./components/Login/Login";
import Gallery from "./components/Gallery/Gallery";
import PageError from "./components/PageError/PageError";
import About from "./components/About/About";
import Admin from "./components/Admin/Admin";
import Coming from "./components/Coming/Coming";
import Contact from "./components/Contact/Contact";
import Clan from "./components/Clan/Clan";
import Register from "./components/Register/Register";
import { motion } from "framer-motion"
import Music from "./components/Music/Music"
import Slidebar from "./components/Slidebar/Slidebar";
import Users from "./components/Pages/Users/Users";
import Products from "./components/Pages/Products/Products";
import House from "./components/House/House";
import Videoland from "./components/Videoland/Videoland";

function App() {
  const [isloading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 1400)
  if (isloading) {
    return (
      <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className="parent-main-content-load">
        <div class="loader">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
      </motion.div>
    )
  }


  return (
    <div className="App">
      <Navbars />
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/blog" element={<BLog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pageerror" element={<PageError />} />
        <Route path="/blog/:bleble" element={<Info />} />
        <Route path="/about" element={<About />} />
        <Route path="/coming" element={<Coming />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clan" element={<Clan />} />
        <Route path="/register" element={<Register />} />
        <Route path="/music" element={<Music />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/videoland" element={<Videoland />} >
      </Route>

      </Routes>
    </div>
  );
}

export default App;
