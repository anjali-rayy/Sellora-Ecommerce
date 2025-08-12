import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { fetchProducts, filterProductsByCategory } from '../data/sampleProducts';

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide content data with better sized images
  const slides = [
    {
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      subtitle: "Ultimate gaming experience with cutting-edge technology",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&h=400&q=80",
      controllerImage: "https://images.unsplash.com/photo-1592840331687-c7d58efefc4e?auto=format&fit=crop&w=300&h=200&q=80",
      bgGradient: "from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    },
    {
      title: "Premium Audio Experience - Wireless Excellence",
      subtitle: "Crystal clear sound with noise-cancelling technology",
      // Fixed problematic second slide image with proper dimensions
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&h=400&q=80",
      controllerImage: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=300&h=200&q=80",
      bgGradient: "from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900"
    },
    {
      title: "Smart Living Made Simple - Latest Tech Innovations",
      subtitle: "Transform your lifestyle with cutting-edge smart devices",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=600&h=400&q=80",
      controllerImage: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=300&h=200&q=80",
      bgGradient: "from-green-50 to-teal-100 dark:from-gray-900 dark:to-green-900"
    }
  ];

  useEffect(() => {
    loadProducts();
  }, []);

  // Auto-slide carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    try {
      let data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleShopNow = () => {
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreDeals = () => {
    navigate('/all-products');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-orange-500 mx-auto mb-4"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section with Sliding Pages */}
      <section className={`relative bg-gradient-to-br ${slides[currentSlide].bgGradient} overflow-hidden transition-all duration-1000`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in" key={`slide-${currentSlide}`}>
              {/* Urgency Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-orange-700 dark:text-orange-400">
                  Hurry up only few left!
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handleShopNow}
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Shop Now
                </button>
                <button 
                  onClick={handleExploreDeals}
                  className="px-8 py-4 text-gray-700 dark:text-gray-300 hover:text-orange-500 font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  Explore Deals 
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Dynamic Images with Fixed Sizing */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Product Image - Fixed dimensions */}
                <div className="relative">
                  <img 
                    src={slides[currentSlide].image}
                    alt="Featured Product"
                    className="w-full max-w-lg mx-auto h-80 object-cover rounded-2xl drop-shadow-2xl transition-all duration-1000"
                  />
                  
                  {/* Secondary Product positioned at bottom - Fixed dimensions */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 translate-y-4">
                    <img 
                      src={slides[currentSlide].controllerImage}
                      alt="Secondary Product"
                      className="w-48 h-32 object-cover rounded-lg drop-shadow-lg transition-all duration-1000"
                    />
                  </div>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-3xl transform rotate-3 scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-indigo-200/20 to-cyan-200/20 rounded-3xl transform -rotate-2 scale-105"></div>
            </div>
          </div>

          {/* Carousel Controls - Only dots, no numbered buttons */}
          <div className="flex justify-center gap-2 mt-12">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-orange-500 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* REMOVED: Numbered slide indicators (1, 2, 3) section completely removed */}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="products-section py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Popular products
            </h2>
          </div>

          {/* Products Grid - Show only first 3 unique products */}
          {products.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No products found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                Try refreshing the page or check back later.
              </p>
              <button 
                onClick={loadProducts}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Retry Loading
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Show only first 3 unique products to avoid duplicates */}
              {products
                .filter((product, index, self) => 
                  index === self.findIndex(p => p._id === product._id || p.name === product.name)
                )
                .slice(0, 3)
                .map((product) => (
                  <div key={product._id} className="group">
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          )}

          {/* View All Products Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/all-products')}
              className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience the best shopping with our premium services and quality products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚚",
                title: "Fast Delivery",
                description: "Quick and reliable shipping to your doorstep"
              },
              {
                icon: "🔒",
                title: "Secure Payment",
                description: "Your transactions are safe and protected"
              },
              {
                icon: "🎧",
                title: "24/7 Support",
                description: "Round-the-clock customer service assistance"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;