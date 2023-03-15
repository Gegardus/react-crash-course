import React from 'react';

const NewPropExample = (props) => {
    // sends data to parent
   
   const { getValueFromChildComponent } = props;

    const handleClick = () => {
        const count = 5;
        getValueFromChildComponent(count + 1);

    }

    return (
        <div>  
          <button onClick={handleClick}>Click On</button> 
        </div>
    )
}

export default NewPropExample;
