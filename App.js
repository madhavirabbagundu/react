import React from 'react';
import './App.css';

function App() {
  const [count,setCount] = React.useState(0);
 
  const increase = ()=>{
    setCount(count+1);
  };

  const decrese = ()=>{
    setCount(count-1)
  }

  const double = ()=>{
    setCount(count+2);
  }




  return (
    <div className="App">
    <h1>Counter:{count}</h1>
    {count%2===0 ? <h1 style={{color:'green'}}>{count}</h1>:<h1 style={{color:'red'}}>{count}</h1>}
    <button onClick = {increase}>Increase</button>
    <button onClick = {decrese}>decrease</button>
    <button onClick = {double}>double</button>
    </div>
  );
}

export default App;
