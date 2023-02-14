import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cube from "./components/Cube";
import Service from "./components/Service";
import AboutHome from "./components/AboutHome";
import Footer from "./components/Footer";
import Operate from "./components/Operate";
import Particle from "./components/Particle";

function App() {
  return (
    <div className="App">
      <Particle />
      <Navbar />
      <div className="hero-main-cube-heading">
        <Hero />
        <Cube />
      </div>
      <Service />

      <AboutHome />
      <Operate />
      <Footer />
    </div>
  );
}

export default App;
