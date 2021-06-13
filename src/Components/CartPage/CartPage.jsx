import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Navbaar from "../Navbar/Navbaar";

const CartPage = () => {
  return (
    <>
      <Navbaar />
      <Link to="/">
        <Typography variant="body2" bold style={{ padding: 30 }}>
          BACK
        </Typography>
      </Link>
      <div>
        <Typography
          variant="h4"
          bold
          style={{ padding: 15, textAlign: "center" }}
        >
          Cart Page
        </Typography>
      </div>
    </>
  );
};

export default CartPage;
