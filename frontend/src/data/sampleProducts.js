// frontend/src/data/sampleProducts.js
export const sampleProducts = [
  {
    _id: '1',
    name: 'Smart Watch',
    description: 'Fitness smartwatch with heart rate monitor and GPS.',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    category: 'Electronics',
    stock: 15,
    rating: 4.5,
    reviews: 128
  },
  {
    _id: '2',
    name: 'Wireless Earbuds',
    description: 'Noise-cancelling wireless earbuds with charging case.',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop',
    category: 'Electronics',
    stock: 8,
    rating: 4.3,
    reviews: 89
  },
  {
    _id: '3',
    name: 'Notebook Set',
    description: 'Aesthetic A5 notebook set with dotted pages, pack of 3.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
    category: 'Stationery',
    stock: 25,
    rating: 4.7,
    reviews: 45
  },
  {
    _id: '4',
    name: 'Bluetooth Speaker',
    description: 'Portable waterproof Bluetooth speaker with 12-hour battery.',
    price: 49.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
    category: 'Electronics',
    stock: 12,
    rating: 4.4,
    reviews: 67
  },
  {
    _id: '5',
    name: 'Laptop Stand',
    description: 'Adjustable aluminum laptop stand for ergonomic working.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
    category: 'Electronics',
    stock: 18,
    rating: 4.6,
    reviews: 92
  },
  {
    _id: '6',
    name: 'Gel Pen Set',
    description: 'Premium gel pens with smooth ink flow, set of 12 colors.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=300&h=300&fit=crop',
    category: 'Stationery',
    stock: 30,
    rating: 4.2,
    reviews: 34
  }
];

// Mock API functions for development
export const fetchProducts = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return sampleProducts;
};

export const fetchProductById = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return sampleProducts.find(product => product._id === id);
};

export const searchProducts = async (query) => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return sampleProducts.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
};

export const filterProductsByCategory = async (category) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  if (category === 'All Categories') return sampleProducts;
  return sampleProducts.filter(product => product.category === category);
};