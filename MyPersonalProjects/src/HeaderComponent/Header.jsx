import React from 'react';
import Typed from 'react-typed';
import '../CSS/master.css';
import '../CSS/nav.css';
import '../CSS/normalized.css';
import '../Menu.css';
import { About } from './About';

export function HeaderComponent() {
    return (
        <div className='header-wrapper'>
            <div className='main-info'>

                <Typed
                    className='typed-text'
                    strings={["Data Structure", "Java", "Web Development", "Program"]}

                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />



            </div>
            <About />


        </div>
    )
}
