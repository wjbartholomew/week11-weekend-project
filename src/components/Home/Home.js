import React, { Component } from 'react';
import {connect} from 'react-redux';

// import './App.css';

class Home extends Component {


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