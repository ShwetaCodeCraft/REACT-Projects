import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    //counter is a variable and setCounter is a function to update the value of counter.
    //name of the variable that is counter and function that is setCounter, can be changed . for eg. it can be abc or xyz...
  let [counter , setCounter] = useState(10); //useState is a hook where 10 is the default value
  // useState gives 2 things in the form of array [value , function].

  const addValue = () => {
    // console.log("value added", Math.random());
    // console.log("clicked", counter)
    // counter = counter +1
    if(counter<20){
    setCounter(counter + 1);
    }
  }
  const removeValue = () => {
    if(counter>0){
    setCounter(counter - 1)
    }
  }
  return (
    <>
    <h1>This is my first React Project.</h1>
    <h2>Counter Value: {counter}</h2>
    {/*we will use onclick methode to add functions to the button .  */}
    {/* addValue is the functio we are passing through it. */}
    <button onClick={addValue} >Add Value {counter} </button>
    <br />
    <br />
    <button onClick={removeValue} >Remove Value {counter} </button>
    </>
  )
}
export default App
