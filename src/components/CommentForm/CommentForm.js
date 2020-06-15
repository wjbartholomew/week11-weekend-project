import React, { Component } from 'react';
import { connect } from 'react-redux';


class CommentForm extends Component {

    
    state = {};


    goToReview = (event) => {

        event.preventDefault()
        const comments = this.state.comments
        console.log("input:", comments)

        //input validation
        if (comments === '' || comments === undefined){
            alert("please enter a comment")
        }
        
        //send data to reducer
        else {
            this.props.dispatch({
                type: 'COMMENTS',
                payload: this.state.comments
            })

        //advance to next form
            this.props.history.push('/ReviewPage');
        }
    }

        
    //track input field with state
    handleChange = (event) => {
        this.setState({
            ...this.state,
            comments: event.target.value
        })
    }


    render() {
        return (
            <>
                <h1>Comment Form</h1>
                <h2>Please leave a comment letting us know how you are doing!</h2>

                <form onSubmit={this.goToReview}>
                    <input type="text" onChange={this.handleChange} required></input>
                    <button type="submit" onClick={this.goToReview}>Next</button>
                </form>
            </>
        )
    }
}


export default connect()(CommentForm);