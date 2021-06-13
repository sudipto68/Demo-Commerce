import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { CartContext } from "../../App";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Navbaar = () => {
  let history = useHistory();
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, i) => acc + i.quantity, 0);
  //console.log(total);

  const moveToCart = () => {
    history.push("/cart");
  };
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Demo Commerce
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit" onClick={moveToCart}>
              <Badge badgeContent={total.toString()} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton color="inherit" onClick={moveToCart}>
              <Badge badgeContent={total.toString()} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbaar;
