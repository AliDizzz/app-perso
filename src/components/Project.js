import React, { useState } from 'react';
import { projectsData } from '../data/projectsData'

const Project = (props) => {
    const [currentProject] = useState(projectsData);
    const project = currentProject[props.projectNumber];

    return (
        <div className="project-main">
            <div className="project-content">
                <h1>{project.title}</h1>
                <p>{project.date}</p>
                <ul className="languages">
                    {project.languages.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Project;