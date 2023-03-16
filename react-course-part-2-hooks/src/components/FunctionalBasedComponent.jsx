import React, { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { Context } from '../App'

// for  useReducer
const initialState = {
  flag : false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_BUTTON' :
      console.log(state, action);
      return {
        ...state,
        flag : !state.flag
      }
    default : 
      return state  
  };
}

function FunctionalBasedComponent() {
  // useState  
  const [count, setCount] = useState(0) // count - initial state, setCount - dispatch function, that updates state
  const [flag, setFlag] = useState(false) 
  console.log(count);

  const handleClick = () => {
  setCount(count + 1)
  }

  // useEffect
  useEffect(() => {
    console.log('With empty dependency array useEffect is called only one on page load.');
  }, []) // like componentdidmount for class component

  useEffect(() => {
    if(count === 5) {
        setFlag(true);
    }
  }, [count]) // like componentdidupdate for class component

  useEffect(() => {
    console.log('This function has cleaning effect.');
  }) // like componentwillunmount for class component

  // useContext
  const getValueFromContext = useContext(Context)
  console.log(getValueFromContext);

  // useReducer as useState for snippet of code
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state);

  // useRef to see input
  const inputRef = useRef(null)
  console.log(inputRef);

  useEffect(() => {
    inputRef.current.focus()
  }, [count]) 

  // const handleFocus = () => {
  //   inputRef.current.focus()
  // }
    
  return(
    <div>
      <button onClick={handleClick}>Increase Count</button> 
      <br />   
       Count value is {count}
       {
        flag && <p>Hello everyone from useEffect</p>
       }
       <br />
       <button style={{ backgroundColor : getValueFromContext }}>Click for Context</button>
       <br />
       <button onClick={() => dispatch({type : 'TOGGLE_BUTTON'})}>Toggle Reducer</button>
       <br />
       <input ref={inputRef} name='name' placeholder='Name' type='text' /> 
       {/* <button onClick={handleFocus}>Click for Ref</button> */}
    </div>       
  )
}

export default FunctionalBasedComponent;