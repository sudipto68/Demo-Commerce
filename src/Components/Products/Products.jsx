import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ProductCard from "../ProductCard/ProductCard";

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
  const [products, setProducts] = useState([]);

  //fetching products from the api
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const classes = useStyles();
  return (
    <Container style={{ padding: 10 }}>
      <div className={classes.root}>
        <Grid container spacing={4}>
          {products.map((product) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard key={product.id} product={product} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
};

export default Products;
