import React from 'react';
import todo from '../assets/images/romantix.jpeg';
import cal from '../assets/images/marvel bg img copy.jpg';
import tic from '../assets/images/messageapp.png';

const Portfolio = () => {
    return (
        <div className='container'>
            <div className='row g-4 py-5'>
                <div className='col-md-4 text-center'>
                    <img width={300} height={200} src={todo} alt="app" />
                    <br />
                    <a className='pt-2' href="https://github.com/AllSystemsRGeorge/Romantix" target='_blank'>Romantix</a>
                </div>
                <div className='col-md-4 text-center'>
                    <img width={300} height={200} src={cal} alt="app" />
                    <br />
                    <a className='pt-2' href="https://github.com/monineathsar/Marvel_Trivia1.0" target='_blank'>Marvel Trivia</a>
                </div>
                <div className='col-md-4 text-center'>
                    <img width={300} height={200} src={tic} alt="app" />
                    <br />
                    <a className='pt-2' href="https://github.com/dianaportillo/MessageApp" target='_blank'>Chat App</a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio