import React, { Component } from 'react';
import { connect } from 'react-redux';





class CommentForm extends Component {

    state = {};

    goToReview = (event) => {
        event.preventDefault()
        console.log(this.props)

        this.props.dispatch({
            type: 'COMMENTS',
            payload: this.state.comments
        })
        this.props.history.push('/ReviewPage');
    }

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
            <form onSubmit={this.goToReview}>
                <input type="text" onChange={this.handleChange}></input>
                <button type="submit" onClick={this.goToReview}>Next</button>
            </form>
            </>
        )
    }
}

export default connect()(CommentForm);