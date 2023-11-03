import React from "react";

type ContentProps = {
    title: string;
    text: string;
    img: string;
};

function Content(props: ContentProps) {
    return (
        <div className="overview-content">
            <div className="overview-img">
                <img
                className="ov-img "
                src={props.img}
                alt="content image"
                />
            </div>
            <div className="overview-desc">
                <h2 className="title">{props.title}</h2>
                <p className="description">{props.text}</p>
            </div>
        </div>
    )
};
export default Content;
