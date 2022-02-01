import React, { useEffect } from "react";
import Vivus from 'vivus';
import '../CSS/nav.css';

const MainTitle = () => {
    useEffect(() => {
        new Vivus('title', { duration: 55200, file: 'svg/main-title-changed_animated.svg' })
    }, [])
    return (
        <div id="title" className="title-name">

        </div>
    )
}
export default MainTitle