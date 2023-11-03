import React from "react";

// Define a type for the props that the Content component will receive
type ContentProps = {
    title: string;
    text: string;
    img: string;
};

function OtherContent(props: ContentProps) {
    return (
        <div className="overview-content">
            <div className="overview-desc">
                {/* Display the title and text of the prop */}
                <h2 className="title">{props.title}</h2>
                <p className="description">{props.text}</p>      
            </div>
            <div className="overview-img">
                {/* Display the prop image */}
                <img
                className="ov-img "
                src={props.img}
                alt="content image"
                />
            </div>
        </div>
    )
};
export default OtherContent;
