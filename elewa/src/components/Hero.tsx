import React from "react";
// Defining the dataypes of the data used
type HeroProps = {
      img: string;
      text: string;
      title: string;
  };

function Hero(props: HeroProps){
    
    return (
        <div >
      <img alt='hero-image' src={props.img}/>

      <div className="hero-info">
        <p>{props.text}</p>
        <h1>{props.title}</h1>
      </div>
    </div>
    )
};
export default Hero;