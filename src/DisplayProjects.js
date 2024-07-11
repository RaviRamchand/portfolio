import React from "react";


function DisplayProjects(props) {
    return (
        <div>
            <div className="container-fluid pt-3 mb-3">
                <div className="row">
                    <div className="col-sm-12 col-md-6 d-flex justify-content-center">
                        <a href={props.demoUrl} target="_blank" rel="noopener noreferrer">
                            {props.img.substr(props.img.length - 3) === 'png' ? <img src={`/imgProjs/${props.img}`} className="img-fluid" width={650} alt="project" /> : <div className="embed-responsive embed-responsive-16by9"> <iframe className="embed-responsive-item" src={`/imgProjs/${props.img}`} allowFullScreen width={650} height={250} title={props.id}></iframe></div>}
                        </a>
                    </div>
                    <div className="col d-flex flex-column justify-content-center align-items-center ">
                        <h3 className="text-center fw-normal">{props.name}</h3>
                        <h5 className="text-center fw-normal d-none d-xl-block">{props.desc}</h5>
                        <p className="text-center fw-normal d-block d-xl-none">{props.desc}</p>

                        <div className="d-flex justify-content-between">
                            {props.demoUrl !== "" && <a href={props.demoUrl} className="pe-4" target="_blank" rel="noopener noreferrer">Live Demo</a>}
                            {props.gitUrl !== "" && <a href={props.gitUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default DisplayProjects;