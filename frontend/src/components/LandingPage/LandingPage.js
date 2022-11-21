import React, {useState, useEffect, createContext} from "react";
import Footer from "../Footer";

import TopSection from './TopSection';
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";

export default function LandingPage(){
    
    return (
        <>
        <TopSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Footer />
        </>
        
    )
}