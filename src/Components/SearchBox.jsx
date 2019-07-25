import React from 'react';

const SearchBox = (props) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green'
                type="text"
                placeholder='Search your bot'
                onChange={props.searchBoxDidChange}
            />

        </div>
    )
}

export default SearchBox;