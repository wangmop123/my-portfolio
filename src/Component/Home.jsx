import React, { Profiler, useEffect, useRef } from 'react'
import pdf from '../pdf/resume.pdf';
import profile from './data/photo.json'
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null)
 useEffect(() => {
  
  const opttions = {
    strings: [
       "Welcome to my profile",
       "Hi,Iam Pema Wangmo",
     ],
    typedSpeed: 50,
    backspeed: 50,
    loop: true,
  }

  const typed = new Typed(typedRef.current , opttions)
 
   return () => {
     typed.destroy();
   }
 }, [])
 
  return (
    <>
      <div className="container home" id="home">
        <div className="left"
        data-aos="fade-up-right"
       data-aos-duration="1000"
        >
          <h1 ref={typedRef}> 
            </h1>
               

          <a
           href={pdf} 
          download="Resume.pdf" 
          className="btn btn-outline-warning my-3"
          >
            Download Resume
            </a>
        </div>
        <div className="right">
          <div className="img" 
          data-aos="fade-up-left"
          data-aos-duration="1000"
          >
             <img src={`/assets/${profile.imgSrc}`} alt="profile" />
         
          </div>
        </div>

      </div>

    </>
  )
}

export default Home