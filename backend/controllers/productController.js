const Product = require('../models/Product');

// GET all products with optional filters and pagination
exports.getProducts = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 20 } = req.query;
    const query = {};

    if (category && category !== 'All') query.category = category;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    // Add pagination for better performance (optional)
    const products = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE product with basic field validation
exports.createProduct = async (req, res) => {
  try {
    // Basic validation - adjust as per your schema
    const { name, price, image, description, stock, category } = req.body;
    if (!name || !price || !image || !description || !category) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const product = new Product({ name, price, image, description, stock, category });
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// SEED products - keep secured in production!
exports.seedProducts = async (req, res) => {
  try {
    await Product.deleteMany();

    const sampleProducts = [ /* ... */ ];

    const products = await Product.insertMany(sampleProducts);
    res.status(200).json({ message: "Products seeded successfully", products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
