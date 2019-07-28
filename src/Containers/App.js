import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
// import {robots} from './Robots';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from "./ErrorBoundary";
import {setSearchField} from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = dispatch => {
    //send action
    return {
        searchBoxDidChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: []/*,
            searchField: ''*/
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ robots: users })
            })

    }

    // searchBoxDidChange = (e) => {
    //     this.setState({
    //         searchField: e.target.value.trim()
    //     })
    // }

    render() {
        const {robots} = this.state;
        const {searchField} = this.props;


        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return robots.length === 0
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
