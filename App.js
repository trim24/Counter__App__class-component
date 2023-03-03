import React from "react";
import { Route, Routes } from "react-router-dom";
import Button from "./common/button.component";
import Counter from "./common/counter.component";
import Header from "./common/header.component";

class App extends React.Component {
  state = {
    numbers: [0]
  }

  addCounter = () => {
    this.setState({ numbers: [...this.state.numbers, 0] });
  }

  increment = (index) => {
    console.log(index);
    const numbers = [...this.state.numbers];
    numbers[index]++;
    this.setState({ numbers });
  }

  decrement = (index) => {
    const numbers = [...this.state.numbers];
    numbers[index]--;
    this.setState({ numbers });
  }

  reset = (index) => {
    const numbers = [...this.state.numbers];
    numbers[index] = 0;
    this.setState({ numbers });
  }

  delete = (index) => {
    const numbers = [...this.state.numbers];
    numbers.splice(index, 1);
    this.setState({ numbers });
  }

  render() {
    return (
      <div className="card container">
        <Header />

        <div className="card-body">
          <Button
            event={this.addCounter}
            className="btn btn-outline-success mx-3"
            text="Add Counter"
          />
          <hr></hr>

          {
            this.state.numbers.map((number, index) => {
              return (
                <React.Fragment key={index}>
                  <Counter
                    index={index}
                    number={this.state.numbers[index]}
                    onIncrement={this.increment}
                    onDecrement={this.decrement}
                    onReset={this.reset}
                    onDelete={this.delete}
                  />
                  <br />
                </React.Fragment>
              );
            })
          }

        </div>
      </div>
    );
  }
}

export default App;

