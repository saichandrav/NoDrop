import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBAr from './components/Navbar'
import Footer from './components/footer'
import Homehero from './components/Homehero'
import Partners from './components/partners'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'
import Pricing from './components/Subscription'
import FeatureSection from './components/FeatureSection'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
const App = () => {
  const location = useLocation()
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup'


  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        {!isAuthPage && <NavBAr />}
        <main className="grow">
          <Routes >
            <Route path="/" element={
              <div className='lg:px-20'>
                <Homehero/>
                <FeatureSection/>
                <Partners />
                <Pricing/>
              </div>
            } />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:brand" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            {/* All auth pages hide header and footer */}

          </Routes>
        </main>
        {!isAuthPage && <Footer /> }
      </div>
    </CartProvider>
  )
}

export default App