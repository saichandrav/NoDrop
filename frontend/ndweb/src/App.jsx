import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import NavBAr from './components/Navbar'
import Footer from './components/footer'
import Homehero from './components/Homehero'
import Partners from './components/partners'
import FeatureSection from './components/FeatureSection'
import Pricing from './components/Subscription'

import Products from './pages/Products'
import Cart from './pages/Cart'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

import { CartProvider } from './context/CartContext'

const App = () => {
  const location = useLocation()

  // Auth pages where Navbar & Footer should be hidden
  const AUTH_ROUTES = ['/signin', '/signup', '/login']

  const isAuthPage = AUTH_ROUTES.some(route =>
    location.pathname.startsWith(route)
  )

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <main className="grow">
          
          {/* Navbar hidden on auth pages */}
          {!isAuthPage && <NavBAr />}

          <Routes>
            <Route
              path="/"
              element={
                <div className="lg:px-20">
                  <Homehero />
                  <FeatureSection />
                  <Partners />
                  <Pricing />
                </div>
              }
            />

            <Route path="/products" element={<Products />} />
            <Route path="/products/:brand" element={<Products />} />
            <Route path="/cart" element={<Cart />} />

            {/* Auth Routes */}
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

          {/* Footer hidden on auth pages */}
          {!isAuthPage && <Footer />}
        </main>
      </div>
    </CartProvider>
  )
}

export default App
