import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Analytics from "./components/analytics"
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
