import React, { useState } from 'react';
import { projectsData } from '../data/projectsData'

const Project = (props) => {
    const [currentProject] = useState(projectsData);
    const project = currentProject[props.projectNumber];
    return (
        <div>
            <h1>Project numero {props.projectNumber}</h1>
        </div>
    );
};

export default Project;