const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

// Load environment variables
dotenv.config();

// Sample products to seed
const products = [
  {
    name: "Smart Watch",
    description: "Fitness smartwatch with heart rate monitor and GPS.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=60",
    category: "Electronics",
    stock: 50,
  },
  {
    name: "Notebook Set",
    description: "Aesthetic A5 notebook set with dotted pages, pack of 3.",
    price: 150,
    image: "https://images.unsplash.com/photo-1625533617580-3977f2651fc0?auto=format&fit=crop&w=600&q=60",
    category: "Stationery",
    stock: 200,
  },
  {
    name: "Wireless Earbuds",
    description: "Noise-cancelling wireless earbuds with charging case.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=600&q=60",
    category: "Electronics",
    stock: 80,
  },
];

// Seed function
const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany(); // Clear existing data
    await Product.insertMany(products); // Insert sample data
    console.log('🌱 Sample products seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding products:', error.message);
    process.exit(1);
  }
};

seedProducts();
