import React from "react";
import '../CSS/header.css';
import myimage from '../image/kklinked.jpg';
import MainTitle from './MainTitle';
export function About() {
    return (
        <div className='about-me'>
            <img src={myimage} alt="Khushbu" id="right" />
            <h1 className="main-title"> Hey, I am Khushbu...</h1>
            <MainTitle />
        </div>

    )
}




