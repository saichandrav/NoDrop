import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { AlertCircleIcon, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const itemInCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="p-4 h-full">
      <div className="p-6 border border-neutral-700 rounded-xl shadow-md hover:shadow-blue-500/60 transition-shadow duration-300 text-center w-full flex flex-col h-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl mb-6 shadow-md"
        />

        <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
        <p className="text-neutral-400 mb-4 grow">{product.description}</p>
        <p className="text-xl font-bold mb-6 text-blue-300">₹{product.price}</p>

        {itemInCart && (
          <p className="text-green-400 text-sm mb-3">
            In Cart: {itemInCart.quantity} item(s)
          </p>
        )}

        <button
          onClick={handleAddToCart}
          className="flex w-full py-3 px-5 border border-blue-500 text-blue-300 rounded-lg hover:bg-linear-to-r from-blue-400 to-blue-800 hover:text-white transition duration-200  items-center justify-center gap-2"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
