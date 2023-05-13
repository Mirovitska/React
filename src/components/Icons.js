import React from "react";
import '../App.css'

function Icons(){
    const show = localStorage.getItem('item');
    return <div className="circle-icon">
        <span>{show}</span>
    </div>
}
export default Icons;