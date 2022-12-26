import React from "react"

export default function ThirdSection(){

    
    const base_address = process.env.PUBLIC_URL + "/images/"

    return (
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
                                <img className="img-fluid d-block mb-3 mx-auto rounded-circle" width="175" src={base_address + "PolyU.png"}></img>
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
                                <img className="img-fluid d-block mb-3 mx-auto" width="175" src={base_address + "USP.png"}></img>
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
                                <img className="img-fluid d-block mb-3 mx-auto" width="175" src={base_address + "ETH.png"}></img>
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
                                <img className="img-fluid d-block mb-3 mx-auto rounded-circle" width="175" src={base_address + "TJU.png"}></img>
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
                                <img className="img-fluid d-block mb-3 mx-auto rounded-circle" width="175" src={base_address + "IIT.png"}></img>
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
                                <img className="img-fluid d-block mb-3 mx-auto rounded-circle" width="150" src={base_address + "GCCA.jpeg"}></img>
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
    )
    
}