import React, {Component} from 'react';

class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }
    render() {
        return (
            <div className='pa2'>
                <input
                    className='pa3 ba b--green '
                    type="text"
                    placeholder='Search your bot'
                    onChange={this.props.searchBoxDidChange}
                />

            </div>
        )
    }
}

export default SearchBox;