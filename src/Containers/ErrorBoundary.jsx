import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            errorDescription: errorInfo
        })

        console.log(this.state.errorDescription);
    }


    render() {

        if (this.state.error) {
            return <h1>Oops, there's an error.</h1>
        } else {
            return this.props.children;
        }


    }
}

