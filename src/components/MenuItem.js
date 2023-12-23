import React from 'react'

function MenuItem({image, name, price}) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})`}} data-testid="menu-image"> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  )
}

export default MenuItem
