import React, { Component } from 'react';
import { connect } from 'react-redux';




class SupportForm extends Component {

    state = {};

    goToComment = (event) => {
        event.preventDefault()
        console.log(this.props)


        const support = this.state.support
        console.log("input:", support)

        if (isNaN(support) || support < 1 || support > 5) {
            alert("please enter a valid number")
        }
        else {

        this.props.dispatch({
            type: 'SUPPORT',
            payload: this.state.support
        })
        this.props.history.push('/CommentForm');
    }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            support: event.target.value
        })
    }

    render() {
        return (
            <>
            <h1>Support Form</h1>
            <form onSubmit={this.goToComment}>
                <input type="number" onChange={this.handleChange}></input>
                <button type="submit" onClick={this.goToComment}>Next</button>
            </form>
            </>
        )
    }
}

export default connect()(SupportForm);