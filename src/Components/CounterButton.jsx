import React, {Component} from 'react';

class CounterButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }


    // prevent component from updating when state is the same as next state (count hasn't been updated)
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    updateCount= () => {
        this.setState(state =>  {
            return {count: state.count + 1};
        });
    }

    render() {
        console.log('CounterButton Rendered');
        return (
            <button color={this.props.color} onClick={this.updateCount}>Count: {this.state.count}</button>
        )
    }
}

export default CounterButton;