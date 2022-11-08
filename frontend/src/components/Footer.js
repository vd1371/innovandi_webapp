import React, {useState, useEffect} from "react";

export default function Footer(){

    const [date , setDate] = useState();
    const getYear = () =>  setDate(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])

    return (
    <footer className="text-center">
        <div className="text-center p-3"  id = "footer-content">
        ©{date} Copyright: All rights reserved for <a className="text-dark" href="#">The Hong Kong Polytechnic University</a>
        </div>
    </footer>
    )
}





