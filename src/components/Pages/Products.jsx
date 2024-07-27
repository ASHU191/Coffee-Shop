import React, { useState } from "react";
import Coffee4 from "../../assets/coffee4.png";
import Coffee5 from "../../assets/coffee5.png";
import Coffee6 from "../../assets/coffee6.png";
import Coffee7 from "../../assets/coffee7.png";
import Coffee8 from "../../assets/coffee8.png";
import Coffee9 from "../../assets/coffee9.png";
import Coffee10 from "../../assets/coffee10.png";

const Products = ({ cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [addedProducts, setAddedProducts] = useState(new Set());

  const categories = [
    { id: "all", name: "All" },
    { id: "espresso", name: "Espresso" },
    { id: "americano", name: "Americano" },
    { id: "cappuccino", name: "Cappuccino" },
    { id: "cold-coffee", name: "Cold Coffee" },
  ];

  const products = {
    all: [
      { id: 1, name: "Espresso", img: Coffee4, price: 250 },
      { id: 2, name: "Americano", img: Coffee5, price: 350 },
      { id: 3, name: "Cappuccino", img: Coffee6, price: 400 },
      { id: 4, name: "Cold Coffee", img: Coffee7, price: 850 },
      { id: 5, name: "Ice-cream Coffee", img: Coffee8, price: 1100 },
      { id: 6, name: "Milk Cold Coffee", img: Coffee9, price: 700 },
      { id: 7, name: "Black Coffee", img: Coffee10, price: 300 },
    ],
    espresso: [
      { id: 1, name: "Espresso", img: Coffee4, price: 250 },
    ],
    americano: [
      { id: 2, name: "Americano", img: Coffee5, price: 350 },
      { id: 7, name: "Black Coffee", img: Coffee10, price: 300 },
    ],
    cappuccino: [
      { id: 3, name: "Cappuccino", img: Coffee6, price: 400 },
    ],
    "cold-coffee": [
      { id: 4, name: "Cold Coffee", img: Coffee7, price: 850 },
      { id: 5, name: "Ice-cream Coffee", img: Coffee8, price: 1100 },
      { id: 6, name: "Milk Cold Coffee", img: Coffee9, price: 700 },
    ],
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setAddedProducts(prev => new Set(prev).add(product.id));
  };

  const currentProducts = products[selectedCategory] || [];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Categories section */}
        <div className="text-center mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`py-2 px-4 rounded-full text-sm sm:text-base transition duration-300 ease-in-out ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Card section */}
        <div className="text-center mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            {categories.find(cat => cat.id === selectedCategory)?.name || "Products"}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 place-items-center">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-white hover:bg-slate-200 hover:text-black relative shadow-lg group max-w-xs md:max-w-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="h-48 md:h-56 relative">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-lg sm:text-xl font-bold">{product.name}</h1>
                  <p className="text-gray-500 text-sm font-bold">PKR {Math.floor(product.price)}</p>

                  <button
                    onClick={() => addToCart(product)}
                    className={`mt-4 py-2 px-4 rounded-full text-sm transition duration-300 ease-in-out ${
                      addedProducts.has(product.id)
                        ? "bg-green-500 text-white shadow-md hover:bg-green-600"
                        : "bg-blue-500 text-white shadow-md hover:bg-blue-600"
                    }`}
                  >
                    {addedProducts.has(product.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
