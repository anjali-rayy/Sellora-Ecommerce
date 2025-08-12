const express = require('express');
const router = express.Router();
const {
  getProducts,
  createProduct,
  seedProducts,
} = require('../controllers/productController');
const { body, validationResult } = require('express-validator');

// Validation middleware for creating a product
const validateProduct = [
  body('name').notEmpty().withMessage('Product name is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('image').notEmpty().withMessage('Image URL is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('stock').isInt({ min: 0 }).withMessage('Stock must be a non-negative integer'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// @route   GET /api/products
// @desc    Get all products
router.get('/', getProducts);

// @route   POST /api/products
// @desc    Create a new product with validation
router.post('/', validateProduct, createProduct);

// @route   POST /api/products/seed
// @desc    Seed database with sample products
router.post('/seed', seedProducts);

module.exports = router;
