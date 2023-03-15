import React, {Component} from 'react'

class ClassBasedComponent extends Component {

// State and state management part
  
// // === Option with arrow function === 
// state = {
//   // store all state properties here
//   count : 0,
//   flag : false
// }

//   handleClick = () => {
//    // this.state.count = this.state.count + 1 // directly mutating state
//    const {count} = this.state;

//    this.setState({
//      count : count + 1   
//    }, () => {
//     console.log(this.state);
//    })
//   }

// === Option with constructor ===
//   constructor(props) {
//     super(props);
//     this.state = {
//       // store all state properties here
//          count : 0
//     }
//      this.handleClick = this.handleClick.bind(this) 
//   }

//   handleClick() {
//   }

// Life cycle part

  // componentDidMount() {
  //   console.log("Component is mounted")
  // }

  // componentDidUpdate(prevProp, prevState) {
  //   console.log(prevState, this.state);
  //   if(prevState && prevState.count !== this.state.count && this.state.count === 7) {
  //     this.setState({
  //       flag :true
  //     })
  //   }
  // }

  // componentWillUnmount() {
  // }

// Handling events and forms part

// state = {
//   formData : {
//     name : "",
//     age : 0
//   },
//   finalFormaData : {}
// };

// handleNameChange =(event) => {
//   // console.log(event.target);
//   const {value} = event.target;

//   this.setState(prevState => ({
//     formData : {
//       ...prevState.formData,
//       name : value
//     }
//   }))
// }

// handleAgeChange = (event) => {
//   // console.log(event.target);
//   const {value} = event.target;

//   this.setState(prevState => ({
//     formData : {
//       ...prevState.formData,
//       age : value
//     }
//   }))
// }

// handleSubmit = (event) => {
//   // not to refresh after empty field submit
//   event.preventDefault()
//   const {formData} = this.state
//   this.setState(prevState => ({
//     ...prevState,
//     finalFormaData : {
//       ...prevState.finalFormaData,
//       ...formData
//     },
//     // clean submit form after submiting for next submits
//     formData : {
//       name : "",
//       age : 0
//     }
//   }))
// };

// API part

  state = {
    data : []
  }

  componentDidMount() {
    this.getData()
  }

  getData = async() => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
       const response = await fetch('http://localhost:5000//api/v1/students');
   
    
    const data = await response.json();
    console.log(data);
    if(data && data.length) {
      this.setState({
        data
      })
    }
  }

  render() {
    // console.log(this.state)
    // console.log(this.state.formData);
    console.log(this.state);
    return (

      // <div>
      //   <p>This is Class Based component</p> <br />
      //   <button onClick = {this.handleClick}>Click for State</button> <br />
      //   {
      //   this.state.count === 5 && "Remains 2 click before flag turns to true"
      //   }
      //   {
      //     this.state.flag && <p>Happened! flag is true</p>
      //   }
      // </div> 

      // <div> 
      //   <p>This is Class Based component</p>        
      //   <form onSubmit={this.handleSubmit}>
      //     <input name="name" placeholder="name" type={'text'} value={this.state.formData.name} onChange={this.handleNameChange} />
      //     <input name="age" placeholder="age" type={'number'} value={this.state.formData.age} onChange={this.handleAgeChange} />
      //     <button type="submit" aria-label="submit">Submit</button>      
      //   </form>
      //   {
      //     this.state.finalFormaData && Object.keys(this.state.finalFormaData).length > 0 && (
      //       <p>
      //         final data is {this.state.finalFormaData.name} and {this.state.finalFormaData.age} 
      //       </p>
      //     )
      //   }        
      // </div>  

      <div>
        <p>This is Class Based component</p>
       { this.state.data && this.state.data.length > 0
          ? this.state.data.map((dataItem, index) => 
          // <p> {`id ${dataItem.id}; index ${index}: `} {dataItem.title}</p>
          <p> {`id: ${dataItem.id}`}; name: {dataItem.name}; e-mail: {dataItem.email};  rollnumber: {dataItem.rollnumber}; </p> 
          ) : null 
        }
      </div>
    )
  };
}

export default ClassBasedComponent;