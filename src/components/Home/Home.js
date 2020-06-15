import React, { Component } from 'react';
import {connect} from 'react-redux';


class Home extends Component {

    //advance to first form
    startFeedback = () => {
        this.props.history.push('/FeelingForm')
    }



    render() {
        return (
               
                <button onClick={this.startFeedback}>Click here to begin!</button>

        );
    }
}


export default connect()(Home);