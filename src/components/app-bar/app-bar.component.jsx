import React from 'react';
import Hamburger from '../hamburger-icon/hamburger.component';
import { Link, animateScroll as scroll  } from 'react-scroll';

import '../../index.scss';


class AppBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {open:false};
    }
    handleClick = () => (
        this.setState({open: !this.state.open})
    )


    render() {
        return(
            <div className="app-bar">

            <div className="app-options container">
    
                <div className="logo">
                <Link 
                    onClick={this.handleClick}
                        className="nav-item"
                        activeClass="active" 
                        to="big-cool" 
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                         <span>pd</span>
                    </Link>
                   
                    
                    </div>

                <Hamburger action={this.handleClick} open={this.state.open}  />
                <div className={ this.state.open ? "nav-box open" : "nav-box" } >
    
                    <Link 
                    onClick={this.handleClick}
                        className="nav-item"
                        activeClass="active" 
                        to="big-cool" 
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Home
                
                    </Link>
                    <Link 
                    onClick={this.handleClick}
                        className="nav-item"
                        activeClass="active" 
                        to="projects" 
                        spy={true}
                        smooth={true}
                        offset={-99}
                        duration={500}>
                        Projects
                
                    </Link>
    
                    <Link 
                    onClick={this.handleClick}
                        className="nav-item"
                        activeClass="active" 
                        to="about" 
                        spy={true}
                        smooth={true}
                        offset={-99}
                        duration={500}>
                        About Me
                
                    </Link>

                    <Link onClick={this.handleClick}
                        className="nav-item"
                        activeClass="active" 
                        to="footer" 
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Contact
                
                    </Link>
                </div>
            
    
    
           {/*  <Hamburger/> */}
           </div>
        </div>
           

        )
    }
}



export default AppBar;