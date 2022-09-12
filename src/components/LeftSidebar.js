import React from "react";

function LeftSidebar({onTitle, onDescription, onRange, onTitle_color, onDescription_color }) {
    return(
        <div className="LeftSidebar">
            <h1>LeftSidebar</h1>
            <label>
                Title
                <input type="text" className="title" onChange={(e)=>{
                    onTitle(e.target.value);
                }} />
            </label>
            <label>
                Description
                <input type="text" className="description" onChange={(e)=>{
                    onDescription(e.target.value);
                }}  />
            </label>
            <label>
                Range
                <input type="range" max="100" min="0" className="range" onChange={(e)=>{
                    onRange(e.target.value);
                }}  />
            </label>
            <label>
                Title Color
                <input type="color" className="title_color" onChange={(e)=>{
                    onTitle_color(e.target.value);
                }}  />
            </label>
            <label>
                Description Color
                <input type="color" className="description_color" onChange={(e)=>{
                    onDescription_color(e.target.value);
                }}  />
            </label>
        </div>
    )
}
export default LeftSidebar;