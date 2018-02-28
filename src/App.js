import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: props.initialCount || 0
    };
  }
  
  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Increment number</button>
      </div>
    );
  }
}

export default App;