import React, { useEffect } from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init();

  }, [])


  return (
    <>
        <Navbar />
      <div className="container">
       
        <Home />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default App;
