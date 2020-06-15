import React, { Component } from 'react';
import { connect } from 'react-redux';


class UnderstandingForm extends Component {

    state = {}

    goToSupport = (event) => {
        event.preventDefault()
     
        const understanding = this.state.understanding
        console.log("input:", understanding)

        if (isNaN(understanding) || understanding < 1 || understanding > 5) {
            alert("please enter a valid number")
        }
        else {


        this.props.dispatch({
            type: 'UNDERSTANDING',
            payload: this.state.understanding
        })
        this.props.history.push('/SupportForm');
    }
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
            <h2>Please let us know how well you are understanding the current material on a scale from 1 to 5.</h2>
            <form onSubmit={this.goToSupport}>
                <input onChange={this.handleChange} type="number"></input>
                <button type="submit" onClick={this.goToSupport}>Next</button>
            </form>
            </>
        )
    }
}



export default connect()(UnderstandingForm);