import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Results extends Component {
  render() {
    let {correctAnswers, total} = this.props;
    let result = (typeof correctAnswers === 'number') ? `You answered correctly on ${correctAnswers} of ${total} questions!` :
    `You didn't answer all questions!`
    return (
      <div>
        <h4>Results</h4>
        <div>
          {result}
        </div>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

export default Results;
