import React from 'react'
import { Route, Routes as RoutesReact} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import NotFound from './pages/Notfound'
const Routes = () => {
  return (
    <RoutesReact>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='*' element={<NotFound/>}/>
      </RoutesReact>
  )
}

export default Routes
