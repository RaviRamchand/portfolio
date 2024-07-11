import React from "react";
import sheridan from './imgs/davis_campus_entrance.webp'
import humber from './imgs/humber.jpg'
import info from "./Data";
import DisplayResume from "./DisplayResume";

function Resume() {
    var exp = info.exp.map((e) => < DisplayResume key={e.id} {...e} />)

    return (
        <div>
            <h1 className="text-center fw-normal">Resume</h1>
            <div className="container-fluid pt-3 slide-up">
                <div className="row">
                    <h4 className="fw-normal">Education</h4>
                    <div className="col-sm-12 col-md-12 col-lg-5 pt-2 text-center">
                        <img src={sheridan} alt="sheridan" width={600} className="img-fluid" />
                    </div>
                    <div className="col">
                        <h5 className="fw-normal text-lg-center text-center">Sheridan College (2020-2023)</h5>
                        <p className="text-center small">Software Development and Network Engineering</p>
                        <p className="text-start">This program focuses on teaching students the skills and techniques to design, create and implement code to solve a given problem or task. Throughout the course of this program, students will learn various programming and web development languages.</p>
                        <p>Some of the skills that students learn throughout this program are:</p>
                        <ul>
                            <li>Object Oriented Programming in Java</li>
                            <li>Advanced Java Frameworks</li>
                            <li>Web Programming</li>
                            <li>Android Application Development</li>
                        </ul>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-sm-12 col-md-12 col-lg-5 pt-3 text-center">
                        <img src={humber} alt="humber" width={600} className="img-fluid" />
                    </div>
                    <div className="col">
                        <h5 className="fw-normal text-lg-center text-center">Humber College (2018-2020)</h5>
                        <p className="text-center small">Computer Systems Networking and Telecommunications</p>
                        <p>This program prepares students for careers in information and communications technology (ICT). Throughout this two year program, students will learn about configuring and managing various operating systems including Linux devices. A strong emphasis will be given to teaching students about networking with switches, routers, and other networking devices.</p>
                        <p>Some of the skills that students learn throughout the program are:</p>
                        <ul>
                            <li>Creating Networks</li>
                            <li>Troubleshooting network related problems</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <h4 className="fw-normal" style={{ marginLeft: "10px" }}>Experience</h4>
            {exp}
            <br />
            <br />
            <a className="btn btn-primary fixed-bottom resume-button" href="/RaviRamchandResume2024.pdf" target="_blank" role="button">View Full Resume</a>

        </div>
    );
}

export default Resume