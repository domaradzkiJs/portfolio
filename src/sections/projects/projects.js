import React from 'react';
import '../../index.scss';
import { IoLogoGithub } from "react-icons/io";
import { IoIosLink } from "react-icons/io";

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state={
        items: [

            {
                id:1,
                title: 'Recipe app',
                text: 'Web-app for searching recipes, it is based on Edamam API',               
                image: 'https://i.imgur.com/lebNiNi.png',
                link: 'https://sweetrecipes.000webhostapp.com/',
                linkHub: ''  
            },
            {
                id:2,
                title: 'Champions',
                text: `League of legends champions browser`,
                image: 'https://i.imgur.com/6qgHVoK.png',
                link: 'https://domaradzkijs.github.io/champions/',
                linkHub: ''  
            },
            {
                id:3,
                title: 'LoL app',
                text: 'My first a bit larger project with Vanilla Javascript, it uses Riot API to search and display players match history',
                image: 'https://i.imgur.com/YgxdCI4.png',
                link: 'https://domaradzkijs.github.io/lol-app/',
                linkHub: ''    
            },
            {
                id:4,
                title: 'Simple game',
                text: `My attempt to create a simple 2D platform game with a framework Phaser 2`,
                image: 'https://i.imgur.com/cC64hDB.png',
                link: 'https://domaradzkijs.github.io/platform-game/',
                linkHub: ''   
            },
            {
                id:5,
                title: 'Simple game',
                text: `My attempt to create a simple 2D platform game with a framework Phaser 2`,
                image: 'https://i.imgur.com/cC64hDB.png',
                link: 'https://domaradzkijs.github.io/platform-game/',
                linkHub: ''   
            }
        ]
        }
    }
/* Aplikacja wykorzystująca edamam api do wyszukiwania przepisów kulinarnych */
    render() {

        return(
            <div className='projects'>
            <div className="container">
                <h2><span>Check out my projects </span> </h2>
                
                <div className="gallery">
                 
                    {this.state.items.map((item,i)=>(
                        
                        <div className='wrapper' key={i}>
                            <div className="overlay">
                                <div className='item-heading'> {item.title} </div>
                                <div className='icons'> 

                                <div className="icon"> <a href={`${item.link}`} target="_blank" rel="noopener noreferrer"> <IoLogoGithub /> </a> </div>
                                <div className="icon"> <a href={`${item.link}`} target="_blank" rel="noopener noreferrer"> <IoIosLink /> </a> </div>
                                
                                </div>
                                <div className="description"> <p>{item.text}</p> </div>
                           </div>
                             <div className='under'>                            
                              <div className='gallery-item' style={{backgroundImage: `url(${item.image})`}} key={i}>                     
                           
                             </div>
                            </div>
                        </div>
                     
                    ))}
                    
                </div>
            </div>
        </div>

        )
    }
} 
export default Projects;