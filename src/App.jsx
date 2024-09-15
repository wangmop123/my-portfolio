import react, { useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About';
import Contact from './Component/Contact';
import Aos from 'aos';
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    Aos.init();

  }, [])

  return (






    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>


  )
}
export default App
{/* <div className="container">
      <Home/>
      <About />
      <Contact />
    </div> */}
