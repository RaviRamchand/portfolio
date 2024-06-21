import React from "react";
import './style.css'

function Langs(props) {
    return (
        <div className="d-sm-inline-block w-25 w-custom p-4">
            <div className="card card-colour header-colour">
                <img src={`/imgSkills/${props.img}`} alt="img" className="lang-img pt-2 img-fluid " />
                <div className="card-body">
                    <h5 className="card-title text-center" style={{color:"black"}}>{props.lang}</h5>
                    <p className="card-title text-center" style={{color:"black"}}>{props.level}</p>
                </div>
            </div>
        </div>
    )
}

export default Langs