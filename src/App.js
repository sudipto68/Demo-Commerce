import { createContext, useState, useEffect } from "react";
import HomePage from "./Components/HomePage/HomePage";

export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
  }, []);

  //set the cart in the local storage
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <HomePage />
    </CartContext.Provider>
  );
}

export default App;
