import React from "react";

function DisplayResume(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="fw-bold">{props.position}</p>
                </div>
                <div className="col text-end">
                    <p>{props.duration}</p>
                </div>
            </div>
            <div className="row ">
                <div className="col">
                    <p>{props.company}</p>
                </div>
            </div>
            <pre><p>{props.points}</p></pre>
        </div>
    );
}

export default DisplayResume;