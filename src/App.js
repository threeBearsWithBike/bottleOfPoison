import React from 'react';
import { useState } from 'react';
import Mouse from './Mouse';
import Range from './Range';
import './App.css';



function App() {
  const [mouse, setMouse] = useState([0,0,0,0,0,0,0,0,0,0]);
  const mouses = mouse.map((mouse, idx) => <Mouse key={ idx } mouse={ mouse } />);

  const print = (value) => {
    setMouse(value);
  }

  return (
    <div className="App">
      <h1>999 бутылок вина + 1 бутылка с ядом</h1>
      <div className='App-mouses'>{ mouses }</div>
      <Range print={print}/>
    </div>
  );
}

export default App;
