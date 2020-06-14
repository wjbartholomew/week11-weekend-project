import React, { Component } from 'react';






class ConfirmationPage extends Component {

    goToFeeling = (event) => {
        event.preventDefault()
        console.log(this.props)
        this.props.history.push('/');
    }

    render() {
        return (
            <>
            <h1>Feedback Submitted</h1>
                <h2>Thank You!</h2>

                <form onSubmit={this.goToFeeling}>
                    <button type="submit" onClick={this.goToFeeling}>Start Over</button>
                </form>
                </>
        )
    }
}

export default ConfirmationPage;