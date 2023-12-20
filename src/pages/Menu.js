import React, { useEffect } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import {Link} from "react-router-dom";

function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="menu">
      <div className="absolute-background"></div>
      <h1 className="menuTitle"> Anne's Sweets </h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>


      <Link to="/contact">
          <button className="orderButton"> Order Now </button>
      </Link>
   
    </div>
  );
}

export default Menu;
