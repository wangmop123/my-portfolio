import React from 'react'



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
                <a href="#home" className="nav_items">
                    Home
                    </a>
                
              <a href="#about" className="nav_items">
                    About Me
                    </a>
               <a href="#contact"  className="nav_items">
                    Contact Me
                    </a>
                
                
                
                
               
            </div>

        </>
    )
}

export default Navbar