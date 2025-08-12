const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-gray-900 text-xl"
        >
          ×
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded mb-4"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
          }}
        />

        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-green-600 font-bold text-lg">₹{product.price}</span>
          <span className="text-sm text-gray-500">{product.stock} in stock</span>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;