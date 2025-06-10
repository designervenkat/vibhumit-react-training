import { useState } from 'react'

export default function LiveText() {
   const [text, setText] = useState('')

   //    const captureText = (e) => {
   //       setText(e.target.value)
   //    }

   return (
      <div className='count-app'>
         <h2>Live Text - {text}</h2>

         <input
            type='text'
            placeholder='Type here....'
            value={text}
            onChange={(e) => setText(e.target.value)}
         />
      </div>
   )
}
