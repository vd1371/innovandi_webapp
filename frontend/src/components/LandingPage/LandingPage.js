import React, {Component} from "react";
import LandingPageMainButton from "./LandingPageMainButton";
import Footer from "../Footer";

export default function LandingPage(){
    
    return (
        <>

        <div className="section" id = "first-section">

            <hr id="first-section-top-divider"></hr>
            <h1 className="text-center first-section">Innovandi_CP11 Project</h1>
            <h3 className="text-center first-section">LCA/LCCA for Recycling Concrete Plants and Products</h3> 
            <hr id="first-section-divider"></hr>
            <LandingPageMainButton />

        </div>

        <div className="section" id = 'second-section'>

            <div className="text-center">
                <h1 className="green-underline" id="about-title">ABOUT</h1>
            </div>

            <div className = "containter">
                <div className="row justify-content-md-center">
                    <div className="col col-sm-4 col-sm-offset-2">
                        <p>
                            Innovandi_CP11 project aims to develop comprehensive LCIs for examining the environmental
                            impacts and cost-benefits of the concrete waste recycling and treatment methods using LCA
                            and LCCA techniques and to create an online open LCA and LCCA platform for sharing of
                            information among industries and academia for practical applications of LCA and LCCA
                            results to select and optimize the best methods for concrete waste recycling
                            in different social and economic contexts.
                        </p>
                        <ul>
                            <li>Objective 1: Examine the existing methods and advanced technologies of concrete waste recycling.</li>
                            <li>Objective 2: Develop a comprehensive lifecycle inventory (LCI) database for different physical, chemical, and mechanical methods of concrete recycling.</li>
                            <li>Objective 3: Create an online open lifecycle assessment (LCA) and lifecycle costs analysis (LCCA) platform for recycling concrete</li>
                        </ul>

                    </div>
                    <div className="col col-sm-4">
                        <img id="about-img" src="../static/images/concrete-for-about-section.jpg"></img>
                    </div>
                </div>
            </div>

        </div>

        <div className = 'section' id = 'third-section'>
            <hr id="third-section-top-divider"></hr>

            <div className="text-center">
                <h1 className="green-underline" id="team-title">TEAM</h1>
            </div>

            <div className="py-5 text-center background-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 p-4">
                            <div className="team-logo-container">
                                <img className="img-fluid d-block mb-3 mx-auto rounded-circle" width="175" src="../static/images/PolyU.png"></img>
                            </div>
                            
                            <div className="team-location-container">
                                <h4><b>The Hong Kong Polytechnic University</b></h4>
                                <h5 className="location"><b>Hong Kong</b></h5>
                            </div>

                            <p className="">The missions of RCRE at PolyU are: Minimize waste required to be
                                disposed of at landfills; Support the Hong Kong Government’s policy
                                in achieving carbon neutrality in 2050; Support the Hong Kong and
                                Central Governments initiatives in promoting Hong Kong and the Greater
                                Bay Area as models of Resources Engineering towards Circular Economy.
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 p-4">
                            <div className="team-logo-container">
                                <img className="img-fluid d-block mb-3 mx-auto" width="175" src="../static/images/USP.png"></img>
                            </div>
                            <div className="team-location-container">
                                <h4> <b >University of Sao Paulo</b> </h4>
                                <h5 className="location"><b>Brazil</b></h5>
                            </div>

                            <p className="">Research Activities: I. Brazilian recycling market, technology and regulations.
                                II. New recycling technologies: Sand production from mixed CDW Low-reactivity,
                                low carbon binder from fines Recycling by cleaning and screening (no crushing)
                                III. Inventory at 5 recycling plants (CO2, Energy, Water, Waste generation, Materials flow)
                            </p>
                        </div>

                        <div className="col-lg-4 p-4">
                            <div className="team-logo-container">
                                <img className="img-fluid d-block mb-3 mx-auto" width="175" src="../static/images/ETH.png"></img>
                            </div>
                            <div className="team-location-container">
                                <h4> <b>ETH Zurich</b> </h4>
                                <h5 className="location"><b>Switzerland</b></h5>
                            </div>
                            <p className="">The Chair for Sustainable Construction gathers a group of scientists and
                                engineers who aim to ground sustainability in all disciplines involved in the built environment.
                                The objective is to identify the relevant parameters that
                                influence the environmental impacts of buildings in order to implement sustainable practices
                                throughout the development of innovative strategies.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 p-4">
                            <div className="team-logo-container">
                                <img className="img-fluid d-block mb-3 mx-auto rounded-circle" width="175" src="../static/images/TJU.png"></img>
                            </div>
                            
                            <div className="team-location-container">
                                <h4><b>Tongji University</b></h4>
                                <h5 className="location"><b>Shanghai</b></h5>
                            </div>

                            <p className="">Research Directions: recycled concrete materials and structures;
                                seismic resistance and isolation of concrete structures;
                                fire safety of high-performance concrete structures;
                                structural sustainability design and green construction;
                                basic theory of building disassembly and resource utilization;
                                3D printed materials; LCCA/LCA of the recycled aggregate concrete buildings.
                            </p>
                
                        </div>

                        <div className="col-lg-4 col-md-6 p-4">
                            <div className="team-logo-container">
                                <img className="img-fluid d-block mb-3 mx-auto rounded-circle" width="175" src="../static/images/IIT.png"></img>
                            </div>
                            <div className="team-location-container">
                                <h4> <b>Indian Institute of Technology Madras</b> </h4>
                                <h5 className="location"><b>India</b></h5>
                            </div>

                            <p className="">The construction industry’s contribution to economic and social growth
                                for India is well known. The TLC project aims to develop innovative
                                low-carbon, lean construction technologies for minimizing waste
                                throughout the construction value-chain, and lead solution
                                implementation across organizational and policy levels.
                            </p>
                        </div>

                        <div className="col-lg-4 p-4">
                            <div className="team-logo-container">
                                <img className="img-fluid d-block mb-3 mx-auto rounded-circle" width="150" src="../static/images/GCCA.jpeg"></img>
                            </div>
                            <div className="team-location-container">
                                <h4> <b>Global Cement and Concrete Association</b> </h4>
                                <h5 className="location"><b>UK</b></h5>
                            </div>
                            <p className="">The Chair for Sustainable Construction gathers a group of scientists and
                                engineers who aim to ground sustainability in all disciplines involved in the built environment.
                                The objective is to identify the relevant parameters that
                                influence the environmental impacts of buildings in order to implement sustainable practices
                                throughout the development of innovative strategies.
                            </p>
                
                        </div>
                    </div>
                </div>

            </div>
        </div>

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

        <Footer />
        
        </>
        
    )
}