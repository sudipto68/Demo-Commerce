import { createContext, useState } from "react";
import HomePage from "./Components/HomePage/HomePage";

export const CartContext = createContext();
function App() {
  const [cartProduct, setCartProduct] = useState(0);
  return (
    <CartContext.Provider value={[cartProduct, setCartProduct]}>
      <HomePage />
    </CartContext.Provider>
  );
}

export default App;
