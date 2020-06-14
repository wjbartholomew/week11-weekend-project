import React, { Component } from 'react';
import { connect } from 'react-redux';


class UnderstandingForm extends Component {

    state = {}

    goToSupport = (event) => {
        event.preventDefault()
        console.log(this.props)
        console.log(this.state)
        this.props.dispatch({
            type: 'UNDERSTANDING',
            payload: this.state.understanding
        })
        this.props.history.push('/SupportForm');
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            understanding: event.target.value
        })
    };

    render() {
        return (
            <>
            <h1>Understanding Form</h1>
            <form onSubmit={this.goToSupport}>
                <input onChange={this.handleChange} type="number"></input>
                <button type="submit" onClick={this.goToSupport}>Next</button>
            </form>
            </>
        )
    }
}



export default connect()(UnderstandingForm);