import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import MainLayouts from './layouts/MainLayouts'
import PlaceOrderPage from './pages/placeOrderPage'
import CartPage from './pages/cartPage'
import HomePage from './pages/HomePage'
function App() {
  
  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route path='/' element = {<MainLayouts />}>
        <Route path='/' element = {<HomePage />} />
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/order' element={<PlaceOrderPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
