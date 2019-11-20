import React from 'react';
import '../../index.scss';
import { IoLogoSass } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { DiGithubFull } from "react-icons/di";
import { DiNpm } from "react-icons/di";

import { FaNode } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoMdBicycle } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

import Form from '../../components/contact-form/contact-form.component';

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state={data:'',
            visible:"none",
            
    }
    }

   handleClick = () => {


        this.setState( {visible:'block'} )
}

    render() {
        return(
            <div className='about'>
            <Form passStyle={this.state.visible} />
                <div className='container'>
                     <h2><span>Something about me...</span> </h2>

                </div>

                <div className="about-wrapper container" >
                
                    <div className="portret">
                        
                    </div>
                     <div className="text-section">
                         <div className="skills">
                             <h3>Skill-set</h3>
                             <h4>Well</h4>

                             <div className="icons-set">
                                 <div><IoLogoHtml5 style={{color:'#E54C21'}}/></div>
                                 <div><IoLogoCss3 style={{color:'#146FB1'}}/></div>
                                 <div><IoLogoJavascript style={{color:'#FFC732'}}/></div>
                                 
                                 
                            </div>
                            <h4>Good</h4>

                            <div className="icons-set">
                                <div><IoLogoSass style={{color:'#C96196'}}/></div>
                                <div><DiReact style={{color:'#5ED4F4'}}/></div>
                                <div><DiGithubFull style={{color:'#24292E'}}/></div>
                                <div><DiNpm style={{color:'#C53635'}}/></div>                               
                            
                            </div>
                            <h4>Basic</h4>
                            <div className="icons-set">
                                <div><FaNode style={{color:'#639B61'}}/></div>
                                <div> <DiMysql style={{color:'#005268'}}/></div>                            

                            </div>
                            
                        </div>
                         <div className="about-me">
                             <h3>Paweł Domaradzki</h3>
                             <h4>Front-End Developer</h4>
                             
                             <p>Currently I am getting more familiar with React and at the same time I am constantly expanding my knowledge of javaScript. Previously I was mainly involved in computer graphics but I am always eager to learn new skills.</p>
                             <a href="mailto:domaradzkicode@gmail.com" email="true" rel="noopener noreferrer"> <button onClick={this.handleClick}>Contact me</button> </a>
                              <div className="icons-set">
                                <div className="git"><a href="https://github.com/domaradzkiJs" target="_blank" rel="noopener noreferrer"> <IoLogoGithub/> </a> </div>
                         

                             </div>
                         </div>
                         <div className="hobbies">
                             <h3>Hobbies</h3>
                             <h4>My free time activities</h4>
                             <div className="icons-set">
                                <div><IoLogoGameControllerB/></div>
                                <div><IoMdBicycle /></div>
                                <div><FaHeadphonesAlt /></div>

                             </div>

                             </div>
                     </div>
                </div>
               
            </div>
        )
    }
}

export default About;