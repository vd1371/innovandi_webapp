import React from "react"

export default function FourthSection(){

    return (
        <div className = 'section' id = 'fourth-section'>
            <hr id="fourth-section-top-divider"></hr>

            <div className="text-center">
                <h1 className="green-underline" id="team-title">TECHNICAL CONTENT</h1>
            </div>

            <div className="py-5 text-center">
                <div className="container">
                    
                    <div className="row">

                        <div className="col-lg-4 col-md-6 p-4">
                            <div className = "technical-content-container">
                                <i className="fa fa-database"></i>
                                <h4><b>Database Development</b></h4>
                                <p>Site-specific data collection and calculation.</p>
                                <a href="#"
                                    className="btn btn-primary btn-lg active"
                                    role="button"
                                    aria-pressed="true">
                                    Learn More
                                </a>
                            </div>
                        </div>

                        
                        <div className="col-lg-4 col-md-6 p-4 text-center">
                            <div className = "technical-content-container text-center">
                                <i className="fa fa-book"></i>
                                <h4><b>Project Documents</b></h4>
                                <p>Find project reports and documents</p>
                                <a href="#"
                                    className="btn btn-primary btn-lg active"
                                    role="button"
                                    aria-pressed="true">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        

                        <div className="col-lg-4 col-md-6 p-4">
                            <div className = "technical-content-container">
                                <i className="fa fa-file-movie-o"></i>
                                <h4><b>Training Courses</b></h4>
                                <p>Learn how to use this open platform.</p>
                                <a href="#"
                                    className="btn btn-primary btn-lg active"
                                    role="button"
                                    aria-pressed="true">
                                    Learn More
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
    
}