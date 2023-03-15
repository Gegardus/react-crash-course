import React from 'react';
import PropExample from '../PropExample/index'
import NewPropExample from '../PropExample/child'

const Child = () => {
    return <p>Child functional component.</p>    
}

const parentComponentHandler = () => {
    console.log('Hi, from parent!');
}

// gets data from child
const getValueFromChildComponent = (value) => {
  console.log(value);
}

function FunctionalBasedComponent() {
    return(
        <div>
            <p>This is Functional Based component</p>
            <Child />            
            <PropExample parentComponentHandler = {parentComponentHandler} flag = {true} data = "data as props passed to child from parent" />
            <NewPropExample getValueFromChildComponent = {getValueFromChildComponent} /> 
        </div>       
    )
}

export default FunctionalBasedComponent;