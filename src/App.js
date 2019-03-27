import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Quiz from './components/quiz';
import Results from './components/results';
import questions from './data/questions.json'
import './App.css';

class App extends Component {
  state = {
    questions: []
  }

  componentDidMount () {
    //imitating fetch here
    this.setState({
      questions: [...questions]
    })
  }

  onFinishQuiz = (result) => {
    this.setState({
      result: result
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>

            <Route exact path='/' render={ () =>
              <Link to="quiz/1">Start quiz</Link>}
            />

            <Route exact path='/quiz/results' render={ () =>
              <Results
                correctAnswers={this.state.result}
                total={this.state.questions.length}
              />}
            />

            <Route path='/quiz/:id?' render={ ({match}) =>
              <Quiz
                key={match.url}
                questions={this.state.questions}
                onFinishQuiz={this.onFinishQuiz}
              />}
            />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
