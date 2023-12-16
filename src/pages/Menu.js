import React from 'react';
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
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
    </div>
  )
}

export default Menu
