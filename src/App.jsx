import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Products from "./components/Pages/Products";                             
import AOS from "aos";
import "aos/dist/aos.css";
import Checkout from './components/Pages/Checkout';



const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const [products, setProducts] = useState({
    all: [
      // Existing products
    ],
    espresso: [],
    americano: [],
    cappuccino: [],
    "cold-coffee": []
  });

  return (
    
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        <Navbar cart={cart} setCart={setCart} />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Banner />
                <Testimonials />
                <AppStore />
               
              </>
            }
          />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
