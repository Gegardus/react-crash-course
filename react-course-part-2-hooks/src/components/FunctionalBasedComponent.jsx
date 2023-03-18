import React from 'react';
import HOC from '../HOC';


function FunctionalBasedComponent(props) {
    console.log(props);
    return(
        <div>
           HOC
        </div>       
    )
}

export default HOC(FunctionalBasedComponent);