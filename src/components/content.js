import React, { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
function Content() {
    let [title, setTitle] = useState("RightSidebar");
    let [description, setDescription] = useState("RightSidebar description");
    let [range, setRange] = useState("");
    let [title_color, setTitle_color] = useState("");
    let [description_color, setDescription_color] = useState("");
    return(
        <div className="content">
            <LeftSidebar 
                onTitle={(data)=>{setTitle(data)}}
                onDescription={(data)=>{setDescription(data)}}
                onRange={(data)=>{setRange(data)}}
                onTitle_color={(data)=>{setTitle_color(data)}}
                onDescription_color={(data)=>{setDescription_color(data)}}
            />
            <RightSidebar 
                title={title}
                description={description}
                range={range}
                title_color={title_color}
                description_color={description_color}
            />
        </div>
    )
}
export default Content;