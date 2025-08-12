// frontend/src/components/CartView.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartView = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Enhanced Empty Cart Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cart</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Enhanced Empty State */}
          <div className="text-center py-20">
            <div className="relative mb-12">
              {/* Animated cart illustration */}
              <div className="relative mx-auto w-48 h-48 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full animate-pulse"></div>
                <svg className="relative w-full h-full text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                  <circle cx="9" cy="17" r="1"/>
                  <circle cx="15" cy="17" r="1"/>
                </svg>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your cart is empty</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start exploring our amazing products!
            </p>
            
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Enhanced Cart Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cart</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="text-lg text-gray-600 dark:text-gray-300">
              {items.length} item{items.length !== 1 ? 's' : ''} in your cart
            </div>
            <button
              onClick={clearCart}
              className="flex items-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-semibold transition-colors duration-200 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear Cart
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items - Enhanced */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <CartItem
                key={item._id}
                item={item}
                isLast={index === items.length - 1}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>

          {/* Order Summary - Enhanced */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-600 dark:text-gray-300">
                    Subtotal ({items.reduce((count, item) => count + item.quantity, 0)} items)
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">${getCartTotal().toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-lg">
                  <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">Free</span>
                </div>
                
                <div className="flex justify-between text-lg">
                  <span className="text-gray-600 dark:text-gray-300">Tax</span>
                  <span className="font-semibold text-gray-900 dark:text-white">${(getCartTotal() * 0.1).toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <div className="flex justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">Total</span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ${(getCartTotal() * 1.1).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  to="/checkout"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Proceed to Checkout
                </Link>
                
                <Link
                  to="/"
                  className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-4 px-6 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-center block"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Secure Payment
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    SSL Protected
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Cart Item Component
const CartItem = ({ item, isLast, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      onRemove(item._id);
    } else {
      onUpdateQuantity(item._id, newQuantity);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <img
                src={item.image || '/api/placeholder/120/120'}
                alt={item.name}
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                onError={(e) => {
                  e.target.src = '/api/placeholder/120/120';
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-xl transition-colors duration-300"></div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {item.name}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                {item.category}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                ${item.price?.toFixed(2)}
              </p>
              <span className="text-lg text-gray-500 dark:text-gray-400">
                × {item.quantity}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Quantity Controls */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
              <button
                onClick={() => handleQuantityChange(item.quantity - 1)}
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-gray-600 dark:text-gray-300"
                disabled={item.quantity <= 1}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                className="w-16 px-2 py-3 text-center bg-transparent text-gray-900 dark:text-white font-semibold border-0 focus:ring-0 focus:outline-none"
              />
              
              <button
                onClick={() => handleQuantityChange(item.quantity + 1)}
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-gray-600 dark:text-gray-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => onRemove(item._id)}
              className="flex items-center gap-2 px-4 py-3 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all duration-200 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span className="hidden sm:inline">Remove</span>
            </button>
          </div>
        </div>

        {/* Item Total */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">Item Total:</span>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;