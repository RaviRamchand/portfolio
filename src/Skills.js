import React from "react";
import info from './Data'
import Langs from "./DisplaySkills";


function Skills() {

    var infoSkills = info.lang.map((i) => {
        return (
            <Langs
                key={i.id}
                img={i.img}
                lang={i.name}
                level = {i.level}
            />
        )
    })


    return (
        <div>
            <h1 className="text-center fw-normal">Skills</h1>

            <span className="slide-up">{infoSkills}</span>

        </div>
    )
}

export default Skills