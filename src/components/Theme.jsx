import { useState } from 'react'

export default function Theme() {
   const [darkTheme, setDarkTheme] = useState(true)

   const changeTheme = () => {
      setDarkTheme(!darkTheme)
   }

   return (
      <div
         className='count-app'
         style={{
            backgroundColor: darkTheme ? '#213547' : '#f9f9f9',
            color: darkTheme ? '#f9f9f9' : '#213547',
         }}>
         <h2>{darkTheme ? 'Dark Mode' : 'Light Mode'}</h2>
         <button
            className='button-element'
            onClick={changeTheme}>
            Toggle Theme
         </button>
      </div>
   )
}
