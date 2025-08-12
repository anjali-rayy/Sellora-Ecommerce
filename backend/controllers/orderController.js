const Order = require('../models/Order');

// Helper function to validate customerInfo
function isValidCustomerInfo(customerInfo) {
  return (
    customerInfo &&
    typeof customerInfo.name === 'string' &&
    typeof customerInfo.email === 'string' &&
    typeof customerInfo.phone === 'string' &&
    typeof customerInfo.address === 'string'
  );
}

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { customerInfo, items, totalAmount } = req.body;

    // Validate required fields
    if (
      !customerInfo ||
      !isValidCustomerInfo(customerInfo) ||
      !Array.isArray(items) ||
      items.length === 0 ||
      typeof totalAmount !== 'number'
    ) {
      return res.status(400).json({ message: 'Invalid or missing required fields' });
    }

    const order = new Order({ customerInfo, items, totalAmount });
    const savedOrder = await order.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('items.productId');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
