import { useState,useCallback, useEffect,useRef } from 'react'
function App() {

  const [length,setlength]=useState(8);
  const [numberallowed,setnumberallowed]=useState(false);
  const [characterallowed,setcharacterallowed]=useState(false);
  const [password,setpassword]=useState('')
  const passwordRef = useRef(null)
  // Yeh ek reference banata hai jo initially null hota hai.

  const passwordGenerator=useCallback(()=>{
    let pass=''
    let string='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberallowed) string+='1234567890'
    if(characterallowed) string+='!@#$%^&*()~_+{}|:"<>?,./;[]'
    for (let index = 0; index < length; index++) {
      let char=Math.floor(Math.random()*string.length)
      pass+=string.charAt(char);
      setpassword(pass)
    }
    
  },[length,numberallowed,characterallowed,setpassword])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);    //Jab ref={passwordRef} kisi input field ko diya jata hai, toh ab
//passwordRef.current us input field ka reference store karega.
//Yeh ?. (optional chaining) ek safety check hai.
//Matlab agar passwordRef.current exist nahi karta toh code error nahi dega, balki silently ignore ho jayega.
    window.navigator.clipboard.writeText(password) //Clipboard pe password copy karega.
  }, [password])

  

  useEffect(()=>{
    passwordGenerator()
  },[numberallowed,characterallowed,length])


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
          <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
                type="text"
                value={password}
                className="outline-none w-full py-1 px-3"
                placeholder="Password"
                readOnly
                ref={passwordRef}
            />
            <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >copy</button>

            
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              onChange={() => {
                  setnumberallowed((prev) => !prev);
              }}
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={characterallowed}
                  id="characterInput"
                  onChange={() => {
                      setcharacterallowed((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
    </div>
        
  )
}

export default App
