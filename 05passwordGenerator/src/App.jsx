import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8); //Controls the length of the generated password, defaulting to 8.
  const [numAllowed, setNumAllowed] = useState(false) ; // A boolean determining if numbers (0123456789) should be included.
  const [charAllowed, setCharAllowed] = useState(false); // A boolean determining if special characters (!@#$%^&*_) should be included.
  const [ password , setPassword] = useState(""); //Stores the currently generated password.

  //useRef hook
  const passwordRef = useRef(null) // A useRef hook that references the password input for copying the password to the clipboard.
  

  /*passwordGenerator:

     Uses useCallback to create a memoized function that generates a random password.

     Constructs a character pool (str) based on the user's settings for numbers and special characters.

     Randomly selects characters from the pool for the specified length.

     Updates the password state. */


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*_"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(char)
    }
     setPassword(pass)

  }
  ,[length, numAllowed, charAllowed, setPassword]);
  
  /* copyPasswordToClipboard:
  Selects and copies the current password to the clipboard using navigator.clipboard.writeText. */
  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  }, [password])
   
  //useEffect Hook:Automatically calls passwordGenerator whenever length, numAllowed, or charAllowed changes, ensuring the password stays up-to-date.


  useEffect (() => {passwordGenerator()}, 
  [length,numAllowed,charAllowed,passwordGenerator])
    return (
    <>
    <h1 className='text-4xl text-center text-white pt-5'>Password Generator</h1>
    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg
     px-4 py-3 my-8 text-orange-500 bg-gray-700'>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
       type="text"
       value={password}
       className='outline-none w-full py-1 px-3'
       placeholder='password'
       readOnly
       ref={passwordRef}
       />
       <button
       onClick={copyPasswordToClipboard}
       className='outline-none bg-blue-700 text-white px-3
        py-0.5 shrink-0'>copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type='range' 
         min={6}
         max={100}
         value={length}
         className='cursor-pointer'
         onChange={(e)=>{setLength(e.target.value)}}
         />
         <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numAllowed}
        id='numberInput'
        onChange={()=>{
          setNumAllowed((prev) => !prev)
        }} />
        <label htmlFor="numberInput">Numbers</label>
      </div>


      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id='characterInput'
        onChange={()=>{
          setCharAllowed((prev) => !prev)
        }}/>
        <label htmlFor="characterInput">Characters</label>
      </div>
     </div>
    </div>
    </>
  )
}

export default App