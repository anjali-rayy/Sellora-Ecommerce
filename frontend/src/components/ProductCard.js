import { useCart } from '../context/CartContext';
import { useState } from 'react';

const ProductCard = ({ product, onViewDetails }) => {
  const { addToCart, getItemQuantity, updateQuantity } = useCart();
  const quantity = getItemQuantity(product._id);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => addToCart(product);
  const handleIncrement = () => updateQuantity(product._id, quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) updateQuantity(product._id, quantity - 1);
    else updateQuantity(product._id, 0);
  };

  // Generate random rating for demo purposes
  const rating = product.rating || (4 + Math.random()).toFixed(1);
  const reviewCount = product.reviewCount || Math.floor(Math.random() * 500) + 50;

  // Create star rating display
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <div className="absolute inset-0 w-1/2 overflow-hidden">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-800">
        <img 
          src={product.image || '/api/placeholder/300/240'} 
          alt={product.name}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Wishlist Heart */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-900 transition-all duration-200 hover:scale-110"
        >
          <svg 
            className={`w-5 h-5 transition-colors ${isLiked ? 'text-red-500 fill-current' : 'text-gray-400 hover:text-red-500'}`} 
            fill={isLiked ? 'currentColor' : 'none'} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Category Badge */}
        {product.category && (
          <div className="absolute top-3 left-3">
            <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 text-xs font-medium px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
        )}

        {/* Discount Badge */}
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
          {product.name}
        </h3>

        {/* Product Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {renderStars(rating)}
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {rating}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            ({reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${product.price?.toFixed(2) || '0.00'}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Stock Status */}
          {product.stock !== undefined && (
            <div className="text-right">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                product.stock > 10 
                  ? 'text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/20' :
                product.stock > 0 
                  ? 'text-yellow-700 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20' 
                  : 'text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/20'
              }`}>
                {product.stock > 0 ? `${product.stock} left` : 'Out of stock'}
              </span>
            </div>
          )}
        </div>

        {/* Buy Now Button */}
        <div className="space-y-2">
          {quantity === 0 ? (
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] ${
                product.stock === 0
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              {product.stock === 0 ? 'Out of Stock' : 'Buy now'}
            </button>
          ) : (
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
              <button
                onClick={handleDecrement}
                className="px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="flex-1 text-center py-3 font-semibold bg-white dark:bg-gray-900">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                disabled={product.stock && quantity >= product.stock}
                className={`px-4 py-3 transition-colors ${
                  product.stock && quantity >= product.stock
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          )}

          {/* View Details Link - Only show if quantity is 0 */}
          {quantity === 0 && (
            <button
              onClick={() => onViewDetails?.(product)}
              className="w-full py-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors text-sm"
            >
              View Details →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;