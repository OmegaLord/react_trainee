import "./Button.css";

const Button = (props) => (
  <button className={`btn ${props.className && props.className}`} type={props.type} onClick={props.onClick} >
    {props.children}
  </button>
);

export default Button;
