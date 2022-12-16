import React from "react"
import full from "./img/react-icon-full.png"

export default
function Navbar() {
    return (
        <div className="container">
            <img className="nav-icon" src={full} alt='React logo'/>
            <h1 className="first-heading"> React Facts</h1>
            <h1 className="sub-heading">React Project</h1>
        </div>
        
    )
}