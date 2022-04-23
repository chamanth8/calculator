import React,{useState} from 'react';
import './App.css';
 const App = () => {
   const[result,setResult]=useState("");
  return (
    <div className='container'>
      <form>
        <input type="text" value={result}/>
      </form>
      <div className="keypad">
        <h>HEY BRO</h>
        <button id="clear">AC</button>
        <button id="backspace">C</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>+</button>
        <button>-</button>
        <button>%</button>
         <button>*</button> 
         <button id="result">result</button>

      </div>
       
    </div>
  )
}

export default App;