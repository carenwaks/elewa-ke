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
                img='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
                text='jnjdsijpfd'
                title="Contact"
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
