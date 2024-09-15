import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
  <div className="container Contact" id="contact">
    <h1>Contact Me</h1>
    <div className="contact-icon"
    data-aos="zoom-in-up"
    data-aos-duration="1000"
    >
      <a href="https://instagram.com" target="_blank" className="items">
    {<FaInstagram className='icons' /> }
    </a>
     
      <a href="https://facebook.com" target="_blank" className="items">      
        <CiFacebook className='icons' />
      </a>
      <a  href="https://linkedin.com" target="_blank" className="items">
        <CiLinkedin className='icons' />
      </a>
      <a href="https://github.com" target="_blank" className="items">
        <FaGithubSquare className='icons' />
      </a>
      <a className="items">
        <SiGmail href="mailto:wangmo9224@gmail.com" target="_blank" className='icons' />
      </a>
    </div>
  </div>
  )
}

export default Contact