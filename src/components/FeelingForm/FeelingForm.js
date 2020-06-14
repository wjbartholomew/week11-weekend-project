import React, {Component} from 'react';
import { connect } from 'react-redux';


class FeelingForm extends Component{

    state = {}

goToUnderstanding = (event) => {
    event.preventDefault()
    console.log(this.props)
    console.log('state:',this.state)

    this.props.dispatch({
        type: 'FEELING',
        payload: this.state.feeling
    })

    this.props.history.push('/UnderstandingForm');
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