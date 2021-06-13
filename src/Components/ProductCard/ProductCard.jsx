import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

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

const ProductCard = ({ product, i, handleAddToCart, products }) => {
  const classes = useStyles();

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
            onClick={() => handleAddToCart(i)}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
