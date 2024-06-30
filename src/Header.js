import React from "react";
import './style.css'


function Header() {
    return (
        <div className="header-background">
            <nav className="navbar navbar-expand-lg shadow p-3 mb-4 rounded navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand source-code-pro header-colour" href="/">&lt;Ravi Ramchand/&gt;</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link header-colour" href="/skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link header-colour" href="/projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link header-colour" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link header-colour" href="/resume">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header