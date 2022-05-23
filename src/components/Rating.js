import React from 'react';
import '../stylesheets/Rating.css'
import star from '../icon-star.svg'

function Rating({ rate, place }) {

    const stars = [];
    for (let i = 0; i < rate; i++){
        stars.push(<img key={i} src={star} className="star"></img>);
    }

    return (
        <div className='rating-container'>
            <div className='rating'>{stars}</div>
            <p>Rated {rate} Stars in {place}</p>
        </div>
    );
};

export default Rating;