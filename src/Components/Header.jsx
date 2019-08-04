import React, {Component} from 'react';
import CounterButton from "./CounterButton";

class Header extends Component {
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return false;
    // }

    render() {
        return (
            <div>
                <h1 className='light-green'>REACTING FRIENDS</h1>
                <CounterButton color={'red'} />
            </div>
        )
    }
}

export default Header;