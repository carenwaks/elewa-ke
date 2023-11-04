import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Content from "./Content";
import OtherContent from "./OtherContent";
import Footer from "./Footer";

function SocialImpact(){
    return (
        <div>
            <Header />
            <Hero
                text='Scaling impact. Beyond the norm'
                title="Human and Environmental Impact through Social Enterprise"
            />
            <Content 
                img= "https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg"
                title= "(Social) business for the win"
                text= " With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive and scalable business. The rest will take care of itself."
                
            />
            <OtherContent 
                title="(Social) business for the win"
                text= " With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive and scalable business. The rest will take care of itself."
                img="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg"
            />
            <Footer />
        </div>
    )
};
export default SocialImpact;
