import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import EmailForm from "./components/EmailForm";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" text-white">
      <Navbar />
      <Hero />
      <Analytics />
      <EmailForm />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
