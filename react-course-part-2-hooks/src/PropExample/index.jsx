import React from 'react';

const PropExample = (props) => {
    // takes data from parent as props
    console.log(props)
    const {flag, data, parentComponentHandler} = props;
    return (
        <div>
          {
            flag ? data : "flag is false"
          }  
          <br /> 
          <button onClick={parentComponentHandler}>Click Me</button> 
        </div>
    )
}

export default PropExample;
