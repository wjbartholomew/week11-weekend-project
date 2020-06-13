import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import './App.css';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import CommentForm from '../CommentForm/CommentForm';
import SupportForm from '../SupportForm/SupportForm';
import ReviewPage from '../ReviewPage/ReviewPage';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>

        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <FeelingForm/>
        </header>
        <br/>
        <Route path='/UnderstandingForm' component={UnderstandingForm}/>
        <Route path='/CommentForm' component={CommentForm} />
        <Route path='/SupportForm' component={SupportForm} />
        <Route path='/ReviewPage' component={ReviewPage} />
        <Route path='/ConfirmationPage' component={ConfirmationPage} />
        </Router>
      </div>
      
    );
  }
}

export default App;
