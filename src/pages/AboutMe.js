import React from 'react';
import profile from '../assets/images/IMG_2333 Small.jpeg';

const AboutMe = () => {
    return (
        <div className='container content'>
            <div className='row justify-content-center py-5'>
                <div className='col-md-9'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className='me-5' src={profile} alt="profile" />
                        <p>Hi, my name is Diana! Welcome to my portfolio. A little bit about me I am a college student at San Francisco State University. I am majoring in Computer Science after attending the Full Stack Web Developer program at UC Berkeley I realized how much I enjoyed learning how to code. I decided that with further education I can improve my skills and learn more in depth about computers in general. Aside from coding I enjoy playing with my dog, traveling/exploring new cities, and relaxing giving time to myself</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe