import React from "react";

function RightSidebar(props) {
    console.log(props.range);
    return(
        <div className="RightSidebar">
            <div className="RightSidebar_container" style={{
                borderRadius: props.range + "%"
            }}>
                <h1 style={{color: props.title_color}}>
                    {props.title}
                </h1>
                <h2 style={{color: props.description_color}}>
                    {props.description}
                </h2>
            </div>
        </div>
    )
}
export default RightSidebar;