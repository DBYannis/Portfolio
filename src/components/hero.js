import React from 'react';
import spaceImage from '../images/space.jpg';

function Hero() {
  return (
    <div className="Hero">
      <section>
        <div
          id="hero"
          style={{ backgroundImage: `url(${spaceImage})` }}
        >
          <div id="name">
            <h1 className="name_text">Yannis Denant-Boemont</h1>
            <h2 className="sub_text">Développeur Full-Stack</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;