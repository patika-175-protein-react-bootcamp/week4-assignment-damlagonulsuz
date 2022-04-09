/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import {TourContext, useContext} from '../context/Tour';

function Tour() {

    const {tour} = useContext(TourContext);

    return(
        <div className='tour'>
            Tour: {tour}
        </div>
    );
}

export default Tour;