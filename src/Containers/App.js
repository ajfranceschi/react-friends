import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
// import {robots} from './Robots';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from "./ErrorBoundary";
import {setSearchField, requestRobots} from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    //send action
    return {
        searchBoxDidChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         robots: []/*,
    //         searchField: ''*/
    //     }
    // }

    componentDidMount() {
        this.props.onRequestRobots();

        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => {
        //         this.setState({ robots: users })
        //     })

    }

    // searchBoxDidChange = (e) => {
    //     this.setState({
    //         searchField: e.target.value.trim()
    //     })
    // }

    render() {
        // const {robots} = this.state;
        const {robots, searchField, isPending, /*error*/} = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return /*robots.length*/ isPending === true
            ? <h1>Loading</h1>
            : (<div className='tc'>
                <h1 className='light-green'>REACTING FRIENDS</h1>
                <SearchBox searchBoxDidChange={this.props.searchBoxDidChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
