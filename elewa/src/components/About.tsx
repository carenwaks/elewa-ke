import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import WeCare from "./WeCare";
import WeCareImage from "./WeCareImage";
import LearnMore from "./LearnMore";
import Culture from "./Culture";

function About(){
    return(
        <div>
            <Header />
            < Hero 
                title='HOW TO RECOGNIZE AN ELEWA MEMBER'
                text="Dependable, Creative, Supportive, Open Minded and Fun*"
            />
            <WeCare />
            <WeCareImage />
            <Culture />
            <LearnMore />
            <Footer />
        </div>
    )
}
export default About