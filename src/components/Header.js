import React from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';

const Header = () => {
    return (
        <>
          <Particles
      className="particles-canvas"
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#FF8C00",
                blur: 1,
                opacity: 1,
                width: 100,
                distance: 1
              }
            },
            shape: {
              type: "square",
              stroke: {
                width:5,
                color: "#1E90FF"
              }
            },
            move: {
              speed: 1,
            }
          }
        }} />
        <div className='header-wrapper'>
            <div className="main-info">
                <h1>Jordan Rantucci</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Full-Stack Web Developer"]}
                    typeSpeed={60}
                    backSpeed={40}
                    loop
                    />
                    <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
            
        </div>
        </>
    )
}

export default Header
