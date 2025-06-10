import { useState } from 'react'

export default function Count() {
   const [count, setCount] = useState(0)

   //    const increaseCount = () => {
   //       setCount(count + 1)
   //    }

   //    const decreaseCount = () => {
   //       setCount(count - 1)
   //    }
   return (
      <div className='count-app'>
         <h2>{count}</h2>
         <button
            className='button-element'
            onClick={() => setCount(count + 1)}>
            Increase +
         </button>
         <button
            className='button-element'
            onClick={() => setCount(count - 1)}>
            Decrease -
         </button>
      </div>
   )
}
