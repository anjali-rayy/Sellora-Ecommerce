const express = require('express');
const router = express.Router();
const { createOrder, getOrders } = require('../controllers/orderController');
const { body, validationResult } = require('express-validator');

// Validation middleware
const validateOrder = [
  body('customerInfo.name').notEmpty().withMessage('Name is required'),
  body('customerInfo.email').isEmail().withMessage('Valid email is required'),
  body('customerInfo.phone').notEmpty().withMessage('Phone is required'),
  body('customerInfo.address').notEmpty().withMessage('Address is required'),
  body('items').isArray({ min: 1 }).withMessage('At least one item is required'),
  body('totalAmount').isNumeric().withMessage('Total amount must be a number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Send validation errors
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Route: Create a new order
router.post('/', validateOrder, createOrder);

// Route: Get all orders
router.get('/', getOrders);

module.exports = router;
