import { useState, useEffect } from 'react'

function App() {
   //    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
   //    const [name, setName] = useState('')

   //    const [products, setProducts] = useState([])

   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

   // Use Cases
   useEffect(() => {
      // Data Fetching
      //   async function getAllProducts() {
      //      try {
      //         const response = await fetch(
      //            'https://68351b82cd78db2058c04649.mockapi.io/products'
      //         )
      //         const data = await response.json()
      //         setProducts(data)
      //      } catch (error) {
      //         console.log('Something went wrong', error)
      //      }
      //   }
      //   getAllProducts()

      localStorage.setItem('theme', theme)
   }, [theme])

   // componentDidMount
   // useEffect(() => {
   // perform any logic or function / side effect
   // console.log('Component - Rendering')
   // }) // without dependency array

   // componentDidMount
   //useEffect(() => {
   // perform any logic or function / side effect
   // console.log('I will run only once') // It run only one time
   // }, []) // empty dependency array

   // on first render + whenever dependancy change
   //    componentDidUpdate
   //    useEffect(() => {
   // perform any logic or function / side effect
   //   console.log(`Component update ${name}`)
   // }, [name]) // when variable change in dependency array will re render again

   // componentWillUnMount
   //    useEffect(() => {
   //       console.log(`Attached Listener`)
   //       window.addEventListener('resize', updateWindowWidth)

   //       // optional or when we need to clean up any logic or functions
   //       //   return () => {
   //       //      console.log(`De-Attached Listener`)
   //       //      window.removeEventListener('resize', updateWindowWidth)
   //       //   }
   //    }, [])

   //    const updateWindowWidth = () => {
   //       setWindowWidth(window.innerWidth)
   //    }

   return (
      <div className='container'>
         <h1>React useEffect Hook</h1>
         {/* <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Type here...'
         /> */}

         {/* {products.map((item) => (
            <p key={item.id}> {item.title}</p>
         ))} */}

         <p>Current Theme : {theme}</p>
         <button
            className='button-element'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Toggle Theme
         </button>
      </div>
   )
}

export default App

// 3 Life Cycle Methods - useEffect hook

// componentDidMount - initial mount / render

// componentDidUpdate - whenever variable or state change component we re-render

// componentWillUnmount - do something before the current component get unmount
