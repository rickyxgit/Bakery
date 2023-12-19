import React from 'react';

import "../styles/about.css";

function About() {
  return (
    <div className="about">
      <div className="flex-container">

        <div className="flex-item">
          <div className="inner">
            <h2> Our Story: </h2> 
            <p>
              At Sweet Delights, we believe in the magic of pastry-making. 
              Our journey began with a passion for crafting exquisite pastries that not only delight the taste buds but also awaken the senses. 
              Established in [Year], Sweet Delights has grown from a humble kitchen experiment to a beloved destination for those seeking the 
              perfect blend of artistry and flavor in their pastries.
            </p>
          </div>
        </div>

        <div className="flex-item">
          <div className="inner2">
            <div className="left"></div>
            <div className="right">
              <h2> Crafting Sweet Memories, One Bite at a Time </h2>
              <p>
                Our talented team of pastry artisans brings passion and creativity to every confection we create. 
                From delicate pastries to artisanal cakes, each treat is a masterpiece, meticulously crafted with the finest ingredients. 
                We believe that a good pastry not only tantalizes the taste buds but also captures the essence of the moment.
              </p>
              </div>
          </div>
        </div>

        <div className="flex-item">
          <div className="inner3">
            <h2> Quality Ingredients, Artful Creations </h2>
            <p>
              Quality is at the heart of everything we do. We source only the finest ingredients, 
              ensuring that every bite is a symphony of flavors. Our commitment to excellence extends 
              beyond taste – our pastries are crafted with precision and artistry. Each creation tells a story of dedication to the craft and a love for the sweet life.
            </p>
          </div>
          
          

      </div>
        
      </div>
    </div>
  )
}

export default About
