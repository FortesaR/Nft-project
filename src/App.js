import React, { useState, useEffect, useRef } from 'react';
import ScrollToTop from "./components/ScrollToTop";
import ScrollReveal from 'scrollreveal';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Free from "./components/Free";
import Clients from  "./components/Clients";
import SuperRare from "./components/SuperRare";
import Release from "./components/Release";
import Like from "./components/Like";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import "./scss/index.scss";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const appContainerRef = useRef(null);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const registerAnimations = () => {
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal('.nav, .home, .free, .clients, .super-rare, .release, .like, .signup, .footer', {
        interval: 500
      });
    };

    registerAnimations();
  }, []);

  useEffect(() => {
    // This useEffect handles the initial DOM manipulation
    const home = appContainerRef.current.querySelector(".home");
    const nav = appContainerRef.current.querySelector(".nav");

    if (home && nav) {
      setTimeout(() => {
        home.style.transform = "none";
        nav.style.transform = "none";
      }, 1500);
    }
  }, [appContainerRef]);

  return (
    <div className='app-container' ref={appContainerRef} data-theme={theme}>
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <Signup />
      <Footer />
    </div>
  );
}
