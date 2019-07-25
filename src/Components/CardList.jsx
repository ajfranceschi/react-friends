import React from 'react';
import Card from './Card';


const CardList = (props) => {
    // if (true) {
    //     throw new Error('Noooo');
    // }
    return(
        <div>
            {
                props.robots.map(robot => {
                    return <Card robot={robot} key={robot.id}/>
                })
            }
        </div>
    )
};

export default CardList;