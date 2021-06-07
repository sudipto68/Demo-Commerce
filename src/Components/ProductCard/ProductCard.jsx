import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IconButton, makeStyles } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

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

const ProductCard = ({ product }) => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const classes = useStyles();

  const handleAddToCart = () => {
    setShow(false);
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
              {product.title}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              fontWeight={500}
              component="h2"
            >
              Price: {product.price}$
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {show ? (
            <Button
              color="primary"
              variant="contained"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          ) : (
            <div className={classes.root}>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddBoxIcon color="primary" fontSize="large" />
              </IconButton>
              {count}
              <IconButton
                onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
              >
                <IndeterminateCheckBoxIcon color="primary" fontSize="large" />
              </IconButton>
            </div>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
