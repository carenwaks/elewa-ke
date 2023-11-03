import data from "../json/navItems.json"

function NavItem(){
    return (
        <ul>
           {data.map((item) => (
          <div >
            <li>{item.title}</li>
          </div>
        ))} 
            
        </ul>
    )
}
export default NavItem;