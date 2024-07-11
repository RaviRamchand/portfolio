import React from "react";
import profile from './imgs/profile.jpg'
import porfileMobile from './imgs/profileMobile.jpg'

function Home() {

    const styles = {
        width: '450px'
    }

    return (
        <div>
            <div className="container-fluid d-none d-lg-block position-relative ">
                <div className="row">
                    <div className="col my-auto fade-in">
                        <h1 className="text-center">Hello World, I'm Ravi</h1>
                        <h5 className="text-center pt-4 fw-normal">A Software Development and Network Engineering honours graduate from Sheridan College with experience building console, web, and mobile applications! <i className="bi bi-rocket-takeoff"></i></h5>

                        <div className="d-flex justify-content-center gap-4 pt-4">
                            <h1><a href="https://github.com/RaviRamchand" className="git-icon-link" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a></h1>

                            <h1><a href="https://www.linkedin.com/in/ravi-ramchand/" className="linkedin-icon-link" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a></h1>
                        </div>

                        <div className="d-flex justify-content-center gap-5 pt-5">
                            <a href="/contact"><button type="button" className="btn btn-colour">Contact</button></a>
                            <a href="/resume"><button type="button" className="btn btn-colour">Resume</button></a>
                        </div>

                    </div>

                    <img src={profile} className="img-fluid" style={styles} alt="profile" />
                </div>

            </div>

            <div className="container-fluid d-block d-lg-none">
                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <br />
                            <img className="img-fluid mx-auto" src={porfileMobile} style={{ width: '150px' }} alt="profile" />
                        </div>

                        <br />

                        <div className="fade-in">
                            <h1 className="text-center ">Hello World, I'm Ravi</h1>
                            <p className="text-center pt-2">A Software Development and Network Engineering honours graduate from Sheridan College with experience building console, web, and mobile applications! <i className="bi bi-rocket-takeoff"></i></p>

                            <div className="d-flex justify-content-center gap-4 pt-2">
                                <h1><a href="https://github.com/RaviRamchand" className="git-icon-link" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a></h1>

                                <h1><a href="https://www.linkedin.com/in/ravi-ramchand/" className="linkedin-icon-link" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a></h1>
                            </div>

                            <div className="d-flex justify-content-center gap-5 pt-3">
                                <a href="/contact"><button type="button" className="btn btn-colour">Contact</button></a>
                                <a href="/resume"><button type="button" className="btn btn-colour">Resume</button></a>
                            </div>
                        </div>
                        <br />

                    </div>

                </div>

            </div>
        </div>

    )
}

export default Home