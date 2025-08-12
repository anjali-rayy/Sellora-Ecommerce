import { useEffect, useState } from 'react';

const CheckoutPage = () => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const getTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate order creation
    alert(`Order placed for ₹${getTotal()}! 🎉`);
    localStorage.removeItem('cart');
    setCart([]);
    setName('');
    setAddress('');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4 divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item._id} className="py-2 flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-4">Total: ₹{getTotal()}</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <textarea
              required
              placeholder="Shipping Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded"
            >
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
