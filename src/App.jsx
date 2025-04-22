import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/Navbar'
import PageTransitionLayout from './layouts/PageTransitionLayout'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PageTransitionLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
