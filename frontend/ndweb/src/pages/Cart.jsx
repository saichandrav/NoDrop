import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, totalPrice } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen  pt-20 px-4 sm:px-6 lg:px-8 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-neutral-400 mb-8">
            Add some products to get started!
          </p>
          <Link
            to="/products"
            className="inline-block py-3 px-6 bg-linear-to-r from-blue-500 to-blue-800 rounded-lg hover:shadow-lg transition duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Shopping Cart
        </h1>

        <div className="space-y-6 mb-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="p-6 border border-neutral-700 rounded-lg hover:shadow-blue-500/60 transition-shadow duration-300 flex flex-col md:flex-row gap-6 md:items-center justify-between"
            >
              <div className="flex gap-4 flex-1 w-full md:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1 leading-tight wrap-break-word max-w-xs sm:max-w-md">
                    {item.name}
                  </h3>
                  <p className="text-blue-300 font-bold">₹{item.price} each</p>
                  <p className="text-neutral-400 text-sm capitalize">{item.brand}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 flex-wrap w-full md:w-auto">
                {/* Quantity Controls */}
                <div className="flex items-center border border-neutral-700 rounded-lg">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="p-2 sm:p-3 hover:bg-neutral-800 transition min-w-10"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="px-4 py-2 font-semibold min-w-12 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="p-2 sm:p-3 hover:bg-neutral-800 transition min-w-10"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-right min-w-24">
                  <p className="text-sm text-neutral-400">Total</p>
                  <p className="text-xl font-bold text-green-400">
                    ₹{item.price * item.quantity}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 sm:p-3 text-red-400 hover:bg-red-500/20 rounded-lg transition"
                  title="Remove item"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="border-t-2 border-neutral-700 pt-8">
          <div className="flex justify-between items-center mb-8 text-2xl">
            <span className="font-semibold">Total Price:</span>
            <span className="text-green-400 font-bold">₹{totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex gap-4 flex-col sm:flex-row">
            <Link
              to="/products"
              className="flex-1 py-3 px-6 border border-blue-500 text-blue-300 rounded-lg hover:bg-blue-500/20 transition text-center font-semibold"
            >
              Continue Shopping
            </Link>
            <button className="cursor-pointer flex-1 py-3 px-6 bg-linear-to-r from-blue-500 to-blue-800 rounded-lg hover:shadow-lg transition text-center font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
