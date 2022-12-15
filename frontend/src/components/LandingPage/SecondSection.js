import React from "react"

export default function SecondSection(){

    const img_address = process.env.PUBLIC_URL + "/images/concrete-for-about-section.jpg"

    return (
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
                        <img id="about-img" src={img_address}></img>
                    </div>
                </div>
            </div>

        </div>
    )
    
}