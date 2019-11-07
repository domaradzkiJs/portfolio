import React from 'react';
import '../../index.scss';
import { IoLogoSass } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { DiGithubFull } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoMdBicycle } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";


class About extends React.Component {
    constructor(props) {
        super(props)
        this.state={data:''}
    }

    render() {
        return(
            <div className='about'>
                <div className='container'>
                     <h2><span>Something about me...</span> </h2>

                </div>

                <div className="about-wrapper container" >
                    <div className="portret"></div>
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
                             <p>I am a highly competent IT professional with a proven track record in designing websites, networking and managing databases. I have strong technical skills as well as excellent interpersonal skills, enabling me to interact with a wide range of clients. I am eager to be challenged in order to grow and further improve my IT skills. My greatest passion is in life is using my technical know-how to benefit other people and organisations.</p>
                             <a href="mailto:domaradzkicode@gmail.com" email rel="noopener noreferrer"> <button>Contact me</button> </a>
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