import React, { Component } from "react";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0
};

export default class App extends Component {

  state = {
    ...INITIAL_STATE
  };

  handleChange = evt => {
    const { name, value, type } = evt.target;

    console.log(evt);

    //this.setState([name]:)
    
  }

  render() {

    
    const { good, neutral, bad } = this.state;
    console.log(good);
    
    return (
      <div>
        <h2>Please leave feedback</h2>
        <label>Good
          <input
            type="radio"
            name="feedback"
            id={nanoid()}
            value="good" 
            onChange={this.handleChange} />
        </label>
        <label>Neutral
          <input
            type="radio"
            name="feedback"
            id={nanoid()}
            value="neutral" 
            onChange={this.handleChange} />
        </label>
        <label>Bad
          <input
            type="radio"
            name="feedback"
            id={nanoid()}
            value="bad" 
            onChange={this.handleChange} />
        </label>
        <h2>Statistics</h2>
        <p>Good: <span>{good}</span></p>
        <p>Neytral: <span>{neutral}</span></p>
        <p>Bad: <span>{bad}</span></p>

      </div>
    );
  }
}
