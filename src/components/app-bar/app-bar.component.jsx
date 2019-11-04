import React from 'react';
import Hamburger from '../hamburger-icon/hamburger.component';
import { Link } from 'react-scroll';
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
    
                <div className="logo">Logo</div>

                <Hamburger action={this.handleClick} open={this.state.open}  />
                <div className={ this.state.open ? "nav-box open" : "nav-box" } >
    
                    <Link 
                        className="nav-item"
                        activeClass="active" 
                        to="projects" 
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Home
                
                    </Link>
                    <Link 
                        className="nav-item"
                        activeClass="active" 
                        to="projects" 
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Projects
                
                    </Link>
    
                    <Link 
                        className="nav-item"
                        activeClass="active" 
                        to="projects" 
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        About Me
                
                    </Link>
                </div>
            
    
    
           {/*  <Hamburger/> */}
           </div>
        </div>
           

        )
    }
}



export default AppBar;