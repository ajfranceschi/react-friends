import React from 'react';
import CardList from "./CardList";
import SearchBox from './SearchBox';
import {robots} from './Robots';

const App = () => {
    return (
        <div>
            <h1>REACTING FRIENDS</h1>
            <SearchBox />
            <CardList robots={robots}/>
        </div>
    )
};

export default App;
