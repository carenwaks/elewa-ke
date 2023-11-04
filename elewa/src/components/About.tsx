import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

function About(){
    return(
        <div>
            <Header />
            < Hero 
                title='HOW TO RECOGNIZE AN ELEWA MEMBER'
                text="Dependable, Creative, Supportive, Open Minded and Fun*"
            />
            <Footer />
        </div>
    )
}