import React from 'react';
import data from "../json/footer.json"

// Defining datatypes for the footer data
type data = {
  
    headquarters: string;
    contact: {
      phone: string;
      email: string;
    };
    brands: string[];
    privacy: string[];
  };


function FooterItem(){
    return (
        // Displaying data 
        <div>
        <div>
          <h3>Headquarters</h3>
          <p>{data.headquarters}</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Phone: {data.contact.phone}</p>
          <p>Email: {data.contact.email}</p>
        </div>
        <div>
          <h3>Brands</h3>
          <ul>
            {/* Mappingto show each brand with its key  */}
            {data.brands.map((brand, index) => (
              <li key={index}>{brand}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Privacy</h3>
          <ul>
            {data.privacy.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    )
}

export default FooterItem;
