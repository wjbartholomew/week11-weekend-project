import React, {Component} from 'react';
import { connect } from 'react-redux';


class FeelingForm extends Component{


    state = {}


    goToUnderstanding = (event) => {

        event.preventDefault()
        const feeling = this.state.feeling
        console.log("input:", feeling)

        //input validation
        if(isNaN(feeling) || feeling < 1 || feeling > 5) {
            alert("please enter a valid number")
        }

        else {
            //send data to reducer
            this.props.dispatch({
                type: 'FEELING',
                payload: this.state.feeling
            })
            // advance to next form
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
                <h2>Please let us know how you are feeling on a scale of 1 to 5.</h2>

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