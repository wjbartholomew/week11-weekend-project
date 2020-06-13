import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class UnderstandingForm extends Component {

    render() {
        return (
            <h1>Understanding Form</h1>
        )
    }
}

export default connect()(UnderstandingForm);