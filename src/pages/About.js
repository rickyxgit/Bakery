import React from 'react';
import MultiplePiizas from "../assets/multiplePizzas.jpeg";
import "../styles/about.css";

function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePiizas})`}}></div>
        <div className="aboutBottom">
            <h1> ABOUT US </h1>
            <p>
                Welcome to Slice Haven, where passion for pizza meets a commitment to quality! Nestled in the heart of Vancouver, 
                our pizzeria is a culinary oasis dedicated to crafting the perfect pie. Established in 1995, 
                Slice Haven has become synonymous with mouthwatering flavors and a warm, inviting atmosphere.

                At Slice Haven, we believe that great pizza starts with the finest ingredients. 
                Our dough is hand-kneaded daily, creating the perfect foundation for our pizzas. 
                We source the freshest tomatoes for our signature sauce and use a blend of premium cheeses to achieve that perfect melt-in-your-mouth goodness. 
                Toppings? Oh, we've got you covered with a tantalizing array of fresh vegetables, savory meats, and unique gourmet options.

                But Slice Haven is more than just pizza; it's a celebration of community and connection. 
                Our friendly staff is passionate about creating a welcoming environment where families, friends, 
                and pizza enthusiasts alike can come together to savor not just a meal, but an experience. 
                Whether you're a traditional Margherita lover or an adventurous BBQ chicken and pineapple explorer, there's a slice for every taste at Slice Haven.

                Join us on a journey of flavor, where every bite tells a story of craftsmanship and dedication. 
                Discover the joy of pizza done right – because at Slice Haven, we're not just making pizza; we're crafting memories, one slice at a time.
            </p>
        </div>
    </div>
  )
}

export default About
