import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HomePage, Contact, About, Products } from './components'
import WebsiteLayout from './components/Shared/Layout'
import {
   RouterProvider,
   createBrowserRouter,
   createRoutesFromElements,
   Route,
} from 'react-router'

// const router = createBrowserRouter([
//    {
//       path: '/',
//       element: <WebsiteLayout />,
//       children: [
//          {
//             path: '',
//             element: <HomePage />,
//          },
//          {
//             path: 'about',
//             element: <About />,
//          },
//          {
//             path: 'products',
//             element: <Products />,
//          },
//          {
//             path: 'contact',
//             element: <Contact />,
//          },
//       ],
//    },
// ])

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route
         path='/'
         element={<WebsiteLayout />}>
         <Route
            path=''
            element={<HomePage />}
         />
         <Route
            path='about'
            element={<About />}
         />
         <Route
            path='products'
            element={<Products />}
         />
         <Route
            path='contact'
            element={<Contact />}
         />
      </Route>
   )
)

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
)
