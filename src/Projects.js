import React from "react";
import info from "./Data";
import DisplayProjects from "./DisplayProjects";

function Projects() {

    var projs = info.projs.map((p)=><DisplayProjects key={p.id} {...p}/>)

    return (
        <div>
            <h1 className="text-center fw-normal">Projects</h1>
            <p className="slide-up">{projs}</p>
        </div>
    );
}

export default Projects;