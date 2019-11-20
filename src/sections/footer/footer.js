import React from 'react';
import '../../index.scss';
import { TiHeart } from "react-icons/ti";
const Footer =()=>  (
    <div className="footer">
        <div className="footer-contain container">
            <div className="phone">
                <h3>Call me</h3>
                <a href="tel:+48661047271" rel="noopener noreferrer"> <p>661-047-271</p> </a>
            </div>
            <div className="madeBy">made with <TiHeart style={{color:'pink',fontSize:'1.3em' }}/> by me</div>
            <div className="mail">
                <h3>Message me</h3>
                <a href="mailto:domaradzkicode@gmail.com" email="true" rel="noopener noreferrer"> <p>domaradzkicode@gmail.com</p> </a>
            </div>
        </div>
    </div>
)

export default Footer;