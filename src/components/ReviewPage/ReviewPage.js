import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';



class ReviewPage extends Component {

    goToConfirmation = (event) => {
        event.preventDefault()
        const reducer = this.props.reduxStore.feedbackReducer
        if (reducer.feeling === undefined || reducer.support === undefined || reducer.understanding === undefined || reducer.comments === undefined ) {
            alert("Incomplete feedback form. Please start over and submit all fields.")
            this.props.history.push('/');
        }
        else {
        console.log(this.props)
        axios.post('/feedback', reducer)
        .then((response) => {    
        this.props.history.push('/ConfirmationPage');
        }).catch((error) => {
        console.log('Failed POST', error)
        })
        
        }
    }



    


    render() {
        return (
            <>
            <h1>Review Page</h1>
            <form onSubmit={this.goToConfirmation}>
                <button type="submit" onClick={this.goToConfirmation}>Submit</button>
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