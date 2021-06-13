import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ProductCard from "../ProductCard/ProductCard";
import { Typography } from "@material-ui/core";
import { CartContext } from "../../App";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rot: {
    maxWidth: 300,
  },
  media: {
    height: 250,
  },
}));

const Products = () => {
  const { cart, setCart } = useContext(CartContext);
  const [cartProduct, setCartProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  //fetching products from the api
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setShow(true);
        var dataMap = data.map((d) => ({ ...d, quantity: 0 }));
        setProducts(dataMap);
        setShow(false);
      });
  }, []);

  //adding product to cart
  const handleAddToCart = (index) => {
    const tempArray = [...products];
    tempArray[index].quantity = tempArray[index].quantity + 1;
    if (tempArray[index].id === cartProduct[index]?.id) {
      setCartProduct([tempArray[index]]);
    } else {
      setCartProduct([...cartProduct, tempArray[index]]);
    }
  };
  //setting cart products in localStorage
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(cartProduct));
  }, [cartProduct]);

  //getting cart products in localStorage
  useEffect(() => {
    const items = localStorage.getItem("product");
    const totalItems = JSON.parse(items);
    setCart(totalItems); //setting the cart products to the context state
  }, [cartProduct]);

  const classes = useStyles();
  return (
    <Container style={{ padding: 10 }}>
      <Typography variant="h6" style={{ padding: 10 }}>
        All Products
      </Typography>
      {!show ? (
        <div className={classes.root}>
          <Grid container spacing={4}>
            {products.map((product, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <ProductCard
                    key={product.id}
                    product={product}
                    i={index}
                    handleAddToCart={handleAddToCart}
                    products={products}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      ) : (
        <Typography variant="h6" style={{ textAlign: "center", padding: 20 }}>
          Loading...
        </Typography>
      )}
    </Container>
  );
};

export default Products;
