import React from 'react';
import '../../index.scss';

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
                        </div>
                         <div className="about-me">
                             <h3>Paweł Domaradzki</h3>
                             <h4>Front-End Developer</h4>
                             <p> I really enjoy providing robust software solutions. (2) I’ve led a software engineering team of 10 programmers at Xyzzy Solutions for three years.
                                  Our proudest moment was receiving the 2018 Bossie award. </p>
                         
                         </div>
                         <div className="hobbies"><h3>Hobbies</h3></div>
                     </div>
                </div>
               
            </div>
        )
    }
}

export default About;