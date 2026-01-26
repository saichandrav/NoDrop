import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBAr from './components/Navbar'
import Footer from './components/footer'
import Homehero from './components/Homehero'
import Partners from './components/partners'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'
import Pricing from './components/Subscription'
import FeatureSection from './components/FeatureSection'

const App = () => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <NavBAr />
        <main className="grow max-w-7xl mx-auto pt-20  px-4 sm:px-6 lg:px-10">
          <Routes>
            <Route path="/" element={
              <>
                <Homehero />
                <FeatureSection/>
                <Partners />
                <Pricing/>
              </>
            } />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:brand" element={<Products />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App