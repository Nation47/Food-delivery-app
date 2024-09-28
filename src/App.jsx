import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import MainLayouts from './layouts/MainLayouts'
import PlaceOrderPage from './pages/placeOrderPage'
import CartPage from './pages/cartPage'
import HomePage from './pages/HomePage'
import { useState } from 'react'
import LoginPopUp from './components/LoginPopUp'
function App() {
  const [showLogin, setShowLogin] = useState(false);
  
  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route path='/' element = {<MainLayouts setShowLogin = {setShowLogin}/>}>
        <Route path='/' element = {<HomePage />} />
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/order' element={<PlaceOrderPage />} />
      </Route>
    )
  )
  return (
    <>
      {showLogin ? <LoginPopUp /> : <></>}
      <RouterProvider router={router} />
    </>
  )
}

export default App
