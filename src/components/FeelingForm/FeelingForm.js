import React, {Component} from 'react';
import { connect } from 'react-redux';


class FeelingForm extends Component{

    state = {}

goToUnderstanding = (event) => {
    event.preventDefault()

    const feeling = this.state.feeling
    console.log("input:", feeling)

    if(isNaN(feeling) || feeling < 1 || feeling > 5) {
        alert("please enter a valid number")
    }
    else {

    this.props.dispatch({
        type: 'FEELING',
        payload: this.state.feeling
    })

    this.props.history.push('/UnderstandingForm');
}
}

handleChange = (event) => {
    this.setState({
        ...this.state,
        feeling: event.target.value
    })
}


    render(){
        return(
            <>
            <h1>Feeling Form</h1>
            <form onSubmit={this.goToUnderstanding}>
                <input onChange={this.handleChange} type="number"></input>
                <button type="submit" onClick={this.goToUnderstanding}>Next</button>
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


export default connect(putReduxStateOnProps)(FeelingForm);