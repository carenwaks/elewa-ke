import data from "../json/navItems.json"

// Defining the datatype for the json data
type NavItemData = {
    title: string;
};

function NavItem(){
    return (
        <ul>
            {/* Mapping the json data and specify the data */}
           {data.map((item: NavItemData) => (
          <div key={item.title}>
            <li>{item.title}</li>
          </div>
        ))} 
            
        </ul>
    )
}
export default NavItem;