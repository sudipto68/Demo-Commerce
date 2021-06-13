import { ListItem, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbaar from "../Navbar/Navbaar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { CartContext } from "../../App";

const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Navbaar />
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ display: "flex", padding: 20 }}>
          <ArrowBackIcon />

          <Typography variant="body1">BACK</Typography>
        </div>
      </Link>
      <div>
        <Typography
          variant="h4"
          bold
          style={{ padding: 15, textAlign: "center" }}
        >
          Cart Page
        </Typography>
        {cart.length === 0 ? (
          <Typography variant="h4" style={{ textAlign: "center", margin: 20 }}>
            You Don't have any item in Cart !!
          </Typography>
        ) : (
          <div style={{ padding: 20 }}>
            {cart.map((product) => (
              <ListItem>
                <div style={{ display: "flex" }}>
                  <Typography>{product.title}</Typography>
                  <Typography style={{ margin: 10 }}>
                    {product.price}
                  </Typography>
                </div>
              </ListItem>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
