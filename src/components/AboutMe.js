import React from 'react';
import ProfessionalImage from '../assets/professional.jpg';

const AboutMe = () => {
    return (
        <div classNameName="aboutMe-wrapper">
                        <h1 className="block-header">About Me</h1>
                        <br />
                        
                        <img className="ProfessionalImage" src={ProfessionalImage} alt="Professional"></img>
                        <br />
                        <p>Hey I am Jordan Rantucci.  I am currently 31 years old and working as a Microbiologist at STERIS in Mentor, Ohio.
                        I live in Eastlake along with my girlfriend, our dog Jazzy, and two cats Zedd and Dez.  I have been interested in coding
                        for the past 5-6 years but never really thought I would have the time to learn a completely new skill.  Since COVID hit I have become
                        quite fond of working from home and believe that learning how to code could be a great opportunity for not only a career move, but a move into
                        a career that is growing and in-demand.  I feel like my desire to problem-solve and creativity is a good start for learning this new skill.
          </p>
                        <br />
                        <p>In my freetime I love staying active by running, hiking, and going on bike rides.  My favorite thing to do is travel and try
                        to see as much of the world as possible.  I also love to laugh and going to see live stand-up comedy is one of my favorite things to do.
                        There is also nothing better than going to a live concert and feeding off of the energy of the crowd and band.  I feel like I am easy to get along with
                        and normally very relaxed and chill.  I look forward to working with all of you on future projects.
          </p>
                    
            
          
        </div>
    )
}

export default AboutMe

