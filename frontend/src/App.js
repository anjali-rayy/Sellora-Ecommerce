import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import CartView from './components/CartView';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import About from './pages/About';
import Contact from './pages/Contact';
import AllProductsPage from './pages/AllProductsPage.js'; // ✅ Make sure this points to a valid component

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-white font-sans transition-colors duration-300">
          <Navigation />

          <main className="pt-24 px-4 sm:px-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/auth" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/all-products" element={<AllProductsPage />} />
              <Route path="/shop" element={<AllProductsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
