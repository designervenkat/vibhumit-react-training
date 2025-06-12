import { useState, useEffect, useRef, useCallback } from 'react'
import toast, { Toaster } from 'react-hot-toast'
function App() {
   const [length, setLength] = useState(8)
   const [character, setCharacter] = useState(false)
   const [numbers, setNumbers] = useState(false)
   const [password, setPassword] = useState('')

   const passwordEl = useRef(null)

   const passwordGenerator = useCallback(() => {
      let pass = ''
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if (numbers) str += '0123456789'
      if (character) str += '@#$%^&*'

      for (let index = 1; index <= length; index++) {
         let char = Math.floor(Math.random() * str.length + 1)
         pass += str.charAt(char)
      }

      setPassword(pass)
   }, [length, character, numbers, setPassword])

   const copyToClipboard = useCallback(() => {
      passwordEl.current?.select()
      passwordEl.current?.setSelectionRange(0, 15)
      window.navigator.clipboard.writeText(password)

      toast.success('Copied to Clipboard')
   }, [password])

   useEffect(() => {
      passwordGenerator()
   }, [length, numbers, character])

   return (
      <div className='container'>
         <Toaster position='top-right' />
         <h1>React useCallback and useRef</h1>
         <h1>Password Generator</h1>

         <div className='password-generator'>
            <input
               className='password'
               type='text'
               readOnly
               value={password}
               ref={passwordEl}
            />
            <button onClick={copyToClipboard}>Copy</button>
         </div>

         <div className='password-options'>
            <div className='flex-center'>
               <input
                  type='range'
                  min={6}
                  max={12}
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
               />
               <label className=''>Length: {length}</label>
            </div>
            <div className='flex-center'>
               <input
                  type='checkbox'
                  id='numberInput'
                  value={numbers}
                  onChange={() => setNumbers((prev) => !prev)}
               />
               <label
                  htmlFor='numberInput'
                  className='text-white text-sm'>
                  Numbers
               </label>
            </div>
            <div className='flex-center'>
               <input
                  type='checkbox'
                  id='characterInput'
                  value={character}
                  onChange={() => setCharacter((prev) => !prev)}
               />
               <label
                  htmlFor='characterInput'
                  className='text-white text-sm'>
                  Characters
               </label>
            </div>
         </div>
      </div>
   )
}

export default App
