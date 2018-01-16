import React, { Component } from 'react';
import './App.css';
import data from "./data.js";
import Radio from './Radio';

class App extends Component {
  state = {
    answer: '',
    answers: [],
    index: 0
  }

  getValue = e => {
    this.setState({
      answer: e.target.value
    })
    console.log(e.target.value)
  }

  changeIndex = e => {
    this.setState({
      index: this.state.index + 1,
      answers: [...this.state.answers, this.state.answer],
    })
    e.preventDefault();
  }
  render() {

    const { answers, index } = this.state
    console.log("answers arr", answers)

    if (index === data.length) {
      return data.map((el, i) => {
        return (
          <div style={{ marginTop: "50px" }} key={i}>
            <h2>{el.question}</h2>
            <p>a - {el.answers.a}</p>
            <p>b - {el.answers.b}</p>
            <p>c - {el.answers.c}</p>
            {el.answers.d ? <p>d - {el.answers.d}</p> : null}
            <p style={{ color: answers[i] === el.correctAnswer ? "green" : "red" }}>Your response - {el.answers[answers[i]]}</p>
            <p>Correct response : {el.correctAnswer}</p>
          </div>
        )
      })

    }
    else {
      let reponseLetter = data[index].answers;
      return (
        <div className="App">
          <h2>{data[index].question}</h2>
          <form onSubmit={this.changeIndex} style={{ display: "flex", flexDirection: "column" }}>
            <Radio onChange={this.getValue} reponse={reponseLetter.a} value="a" />
            <Radio onChange={this.getValue} reponse={reponseLetter.b} value="b" />
            <Radio onChange={this.getValue} reponse={reponseLetter.c} value="c" />
            {reponseLetter.d && <Radio onChange={this.getValue} reponse={reponseLetter.d} value="d" />}
            <button>send</button>
          </form >
        </div >
      );
    }

  }
}

export default App;
