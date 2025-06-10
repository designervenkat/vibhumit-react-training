import { useState } from 'react'

export default function ToggleComponent() {
   const [isVisible, setIsVisible] = useState(true)

   return (
      <div>
         {isVisible && (
            <div className='count-app'>
               <h2>Hello! I'm visible now.</h2>
            </div>
         )}
         <button
            className='button-element'
            onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? 'Hide' : 'Show'} Component
         </button>
      </div>
   )
}
