import React, {Component} from 'react';


const Hello = (props) => {
    return(
        <div className='tc'>
            <h1 className='f1'>{props.greeting}</h1>
            <p className='f3'>Welcome to React!</p>
        </div>
    );
}

export default Hello;
