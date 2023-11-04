import React from "react";
// Defining the dataypes of the data used
type HeroProps = {
      text: string;
      title: string;
  };

function Hero(props: HeroProps){
    
    return (
        <div className="hero-sec">
      {/* Hero section title and description */}
      <div className="hero-info">
        <p >{props.text}</p>
        <h1>{props.title}</h1>
      </div>
    </div>
    )
};
export default Hero;