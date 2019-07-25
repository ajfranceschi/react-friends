import React, {Component} from 'react';
import CardList from "./CardList";
import SearchBox from './SearchBox';
// import {robots} from './Robots';
import './App.css';
import Scroll from './Scroll';

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ robots: users })
            })

    }

    searchBoxDidChange = (e) => {
        this.setState({
            searchField: e.target.value.trim()
        })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='light-green'>REACTING FRIENDS</h1>
                    <SearchBox searchBoxDidChange={this.searchBoxDidChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
    }
};

export default App;
