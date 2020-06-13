import React, {Component} from 'react';
import { connect } from 'react-redux';


class FeelingForm extends Component{


goToUnderstanding = () => {
    this.props.history.push('/UnderstandingForm');
}




    render(){
        return(
            <>
            <h1>Feeling Form</h1>
            <form>
                <button onClick={this.goToUnderstanding}>Next</button>
            </form>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
return {
    reduxState
}
}


export default connect(putReduxStateOnProps)(FeelingForm);