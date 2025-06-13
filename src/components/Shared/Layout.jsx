import { Outlet } from 'react-router'
import Header from './Header/Header'
import Footer from './Footer/Footer'
export default function WebsiteLayout() {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   )
}
