import React, { Component } from 'react';
import { connect } from 'react-redux';



class SupportForm extends Component {


    state = {};

    
    goToComment = (event) => {
        event.preventDefault()


        const support = this.state.support
        console.log("input:", support)

        //input validation
        if (isNaN(support) || support < 1 || support > 5) {
            alert("please enter a valid number")
        }

        //sending data to reducer
        else {
        this.props.dispatch({
            type: 'SUPPORT',
            payload: this.state.support
        })
        this.props.history.push('/CommentForm');
        }
    }

    //tracking input field with local state
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
                <h2>Please let us know how well supported you are feeling on a scale from 1 to 5.</h2>

                <form onSubmit={this.goToComment}>
                    <input type="number" onChange={this.handleChange}></input>
                    <button type="submit" onClick={this.goToComment}>Next</button>
                </form>
            </>
        )
    }
}


export default connect()(SupportForm);