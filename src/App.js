import { createContext, useState } from "react";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from "./Components/CartPage/CartPage";

export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
