import React from 'react';
import ServiceCards from './ServiceCards';

const Services = () => {
    return (
        <div className='container mt-5'>
            <div className="text-container">
                <h1 className='text-center text-success'>Services</h1>
                <p class="text-center">The complete toolkit to turn one-time browsers into long-term customers.</p>
            </div>
            <div className="services_cards my-5">
                <ServiceCards/>
            </div>
        </div>
    );
}

export default Services;
