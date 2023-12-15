import React from 'react'
import {Link} from "react-router-dom";
import '../styles/Home.css';

//style={{ backgroundImage: `url(${BannerImage})` }}
function Home() {
  return (
    <div className="home" >
    
      <div className="headerContainer">
        <h1> Anne's Bakery </h1>
        <p> Indulge in Sweet Moments, <br></br> Every Bite a Delight! </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home
