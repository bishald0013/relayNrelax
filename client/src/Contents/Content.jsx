import React from 'react';
import myGif from '../image1.gif'
import './Content.css'

const Content = () => {
    return (
        <div className='main_content'>
            <div className="row">
                <div className="col-lg-6 text_container">
                    <h1 className='main_content fw-bold'>Rely on us and <br></br> Relax</h1>
                    <p class="my-3 fs-6 fw-regular">Say hello to rely and relax — the platform that helps you build customer relationships across <b>Pucc expiry date</b>, <b>Fitness expiry date</b>, <b>RC expiry date</b>, and more.</p>
                    <button type="button" class="btn btn-dark btn-lg">Sign Up Free</button>
                </div>
                <div className="col-lg-6 text_container_2">
                    <img className='img-fluid w-100' src={myGif} alt="Animated GIF" />
                </div>
            </div>
        </div>
    );
}

export default Content;
