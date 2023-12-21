import React, { useEffect } from 'react'
import {Link} from "react-router-dom";
import '../styles/Home.css';

function Home() {

  useEffect(() => {
    const slideFadeInElement = document.querySelector('.slideIn1');
    const slideFadeInElement2 = document.querySelector('.slideIn2');
    if (slideFadeInElement && slideFadeInElement2) {
      slideFadeInElement.classList.add('visible');
      slideFadeInElement2.classList.add('visible');
    }
  }, []);

  return (
    <div className="home" >
    
      <div className="headerContainer">
        <h1> Anne's Bakery </h1>
        <p className="slideIn1"> Indulge in Sweet Moments, </p>
        <p className="slideIn2"> Every Bite a Delight! </p>
        <Link to="/menu">
          <button> SEE OUR MENU </button>
        </Link>
      </div>
    </div>
  );
}

export default Home
