import { createContext } from 'react';
import './App.css';
import HooksComponent from './components/HooksComponent';
import CustomHookComponent from './components/CustomHookComponent';
// import FunctionalBasedComponent from './components/FunctionalBasedComponent';
import ClassBasedComponent from './components/ClassBasedComponent'
import ErrorBoundaries from './ErrorBoundaries';

export const Context = createContext('light')
console.log(Context);

function App() {
  return (
    <Context.Provider value="lightblue">
    <div className="App"> 
      <h1>Error Boundaries</h1>
      <ErrorBoundaries>
      <ClassBasedComponent />
      </ErrorBoundaries>
      <h1>Higher Order Component</h1>
      <p style={{color: "red", background: "yellow", fontWeight: "900"}}>Not rendered</p>
      {/* <FunctionalBasedComponent /> */}
      <h1>Hooks</h1>  
      <HooksComponent />
      <h1>CustomHook</h1>
      <CustomHookComponent />
    </div>
    </Context.Provider>
  );
}

export default App;
