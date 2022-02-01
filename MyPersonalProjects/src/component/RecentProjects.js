import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../CSS/nav.css';
import { BadgeComponent } from "./BadgeComponent";


const Services = () => {
    return (
        <div className="services" id="my-recent-projects">

            <h1 className="Sub-Title">
                My Recent Projects</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 container justify-content-center">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h3>My Personal Website</h3>
                            <p>The personal website/portfolio of Khushbu Kumari. Built using React and Bootstrap.
                            </p>
                            <div className="language">Languages-

                                <BadgeComponent head="Javascript" value="63.6%" />
                                <BadgeComponent head="CSS" value="32.0%" />
                                <BadgeComponent head="HTML" value="4.4%" />

                            </div>
                            <div>   <a href="https://github.com/khushbu-kumari295/MyPersonalProjects/tree/main/MyPersonalProjects">
                                <i class="fa fa-github"></i>
                                Github
                            </a></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6  container justify-content-center">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h3>My Seattle Experience</h3>
                            <p>This webiste is about my seattle experience webpage.built using Javascript, Html and CSS.
                            </p>
                            <div className="language">Languages-
                                <BadgeComponent head="Javascript" value="54.9%" />
                                <BadgeComponent head="CSS" value="20.5%" />
                                <BadgeComponent head="HTML" value="24.6%" />

                            </div>
                            <div>   <a href="https://github.com/khushbu-kumari295/MyPersonalProjects/tree/main/MySeattleExperience">
                                <i class="fa fa-github"></i>
                                Github
                            </a></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6  container justify-content-center">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h3>Animal Adoption Center and Pet Cafe</h3>
                            <p>This website is a Single-Page Application named as "Fur-Ever" Paradise that describes about the pet cafe and adoption center.
                            </p>
                            <div className="language">Languages-

                                <BadgeComponent head="Javascript" value="63.6%" />
                                <BadgeComponent head="CSS" value="32.0%" />
                                <BadgeComponent head="HTML" value="4.4%" />

                            </div>
                            <div>   <a href="https://github.com/khushbu-kumari295/MyPersonalProjects/tree/main/AnimalShelter_AndCafe">
                                <i class="fa fa-github"></i>
                                Github
                            </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Services;