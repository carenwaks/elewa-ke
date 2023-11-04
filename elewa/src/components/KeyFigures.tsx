import React from "react";
import data from "../json/keyFigures.json"
// Defining the dataypes of the data used
type FigureData = {
      figure: string;
      description: string;
  };

function KeyFigures(){
    
    return (
        <div>
            {/* Mapping the json data and display the data */}
           {data.map((item: FigureData) => (
          <div >
            <p>{item.figure}</p>
            <p>{item.description}</p>
          </div>
        ))} 
            
        
    </div>
    )
};
export default KeyFigures;