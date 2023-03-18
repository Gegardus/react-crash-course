import React, {Component} from 'react'

class ClassBasedComponent extends Component {

  state = {
    count : 0
  }

  handleClick = () => {
    this.setState({
      count : this.state.count + 1
    })
  }

  render() {
      
    if(this.state.count === 3) {
      throw new Error("Some count error")
    }
   
    return (
      <div>
        <p>This is Class Based component</p>
        <button onClick={this.handleClick}>Check Errors</button> <br />
        <p>Count is: {this.state.count}</p>
      </div>
    )
  };
}

export default ClassBasedComponent;