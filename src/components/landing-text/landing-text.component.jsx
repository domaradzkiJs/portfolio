import React from 'react';
import '../../index.scss';
import { Link } from 'react-scroll';




const LandingText = ()=> (

    
        <div className="big-cool">
            <div>


              <h1>Hi, I am <span>frontend</span> developer</h1>    

            <Link                   
                        className="nav-item"
                        activeClass="active" 
                        to="projects" 
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                       <div className="arrows"></div>
                    </Link>
       


             </div>
        </div>
  
    
)

export default LandingText;