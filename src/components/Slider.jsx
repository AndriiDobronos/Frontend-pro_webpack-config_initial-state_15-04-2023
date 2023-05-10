import React from "react";
import "./slider.style.scss"

export default () => {
    return <div>
        <button>Previous</button>
        <div className="slider"  style={{width: '130px', height: '130px'}}>
        </div>
        <button>Next</button>
    </div>
}