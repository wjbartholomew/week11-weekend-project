import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';


class ReviewPage extends Component {

    goToConfirmation = (event) => {
        event.preventDefault()
        console.log(this.props)
        this.props.history.push('/ConfirmationPage');
    }


    render() {
        return (
            <>
            <h1>Review Page</h1>
            <form onSubmit={this.goToConfirmation}>
                <button type="submit" onClick={this.goToConfirmation}>Next</button>
                <p>Feeling: {this.props.reduxStore.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.reduxStore.feedbackReducer.understanding}</p>
                <p>Support: {this.props.reduxStore.feedbackReducer.support}</p>
                <p>Comments: {this.props.reduxStore.feedbackReducer.comments}</p>
            </form>
            </>
        ) 
    }
}

const putReduxStateOnProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(putReduxStateOnProps)(ReviewPage);