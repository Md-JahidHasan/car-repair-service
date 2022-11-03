import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {img, title, price, _id} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-auto">
            <figure><img  src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-xl font-semibold text-orange-600'>Price: $ {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;