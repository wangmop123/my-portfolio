import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
       
        <>
           <div className="container nav_bar"
           data-aos="fade-down"
           data-aos-duration="1000"
           >
             

                <div className="left nav_items">PORTFOLIO</div>
                <div className="right">
                </div>
                <Link to="/" className="nav_items">
                    Home
                    </Link>
                
                <Link to="/about" className="nav_items">
                    About Me
                    </Link>
                <Link to="/contact" className="nav_items">
                    Contact Me
                    </Link>
                
                
                
                
               
            </div>

        </>
    )
}

export default Navbar