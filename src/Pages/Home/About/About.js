import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row my-24">
                <div className='w-1/2 relative'>
                    <img src={person} alt='person' className=" rounded-lg shadow-2xl w-4/5 h-full" />
                    <img src={parts} alt='person' className=" rounded-lg shadow-2xl absolute w-1/2  top-3/4 right-5 border-8 " />
                </div>
                <div className='w-1/2'>
                    <p className= 'my-5 text-orange-600 font-bold text-2xl'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified
                    <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;