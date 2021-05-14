import "./Cart.css";

const Cart = (props) => {
  const classes = props.className && props.className.length > 0 ? " " + props.className : "";

  return <div className={"cart" + classes}>{props.children}</div>;
};

export default Cart;
