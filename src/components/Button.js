/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function Button(props, {onClick}) {

    return(
        <button className='text-button' onClick={onClick}>{props.text}</button>

    );
}

export default Button;