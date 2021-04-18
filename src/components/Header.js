import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
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
    )
}

export default Header
