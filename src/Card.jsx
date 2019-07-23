import React from 'react';


const Card = (props) => {
    const {robot} = props;
    const {id, name, username, email} = robot;

    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw shadow-5'>
            <img src={`https://robohash.org/${name}?size=200x200&?set=set${id}`} alt="robot"/>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    )
};

export default Card;