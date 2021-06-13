import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

import { CartContext } from "../../App";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rot: {
    maxWidth: 300,
    height: 425,
    borderRadius: 10,
  },
  media: {
    height: 250,
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();

  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (products) => {
    let _cart = { ...cart };
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product.id]) {
      _cart.items[product.id] += 1;
    } else {
      _cart.items[product.id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;

    setCart(_cart);
  };

  return (
    <>
      <Card className={classes.rot} style={{ padding: 10, margin: 10 }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="h2">
              {product.title.substring(0, 30)}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {product.price}$
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={(e) => handleAddToCart(product)}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
