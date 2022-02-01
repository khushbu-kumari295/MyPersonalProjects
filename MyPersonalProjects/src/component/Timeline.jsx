import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "../image/school.svg";
import WorkIcon from "../image/work.svg";
import "./timeline.css";
import timelineElements from "./timelineElement";

export function Timeline() {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    return (
        <div>
            <h1 className="title">My Journey</h1>
            <VerticalTimeline>
                {
                    timelineElements.map(element => {
                        let isWorkIcon = element.icon === "work";
                        let showButton = element.buttonText !== undefined && element.buttonText !== null && element.background !== "";
                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{element.title}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle">{element.location}
                                </h5>
                                <p id="description">{element.description}</p>

                            </VerticalTimelineElement>
                        );
                    })}
            </VerticalTimeline>
        </div>
    )
}