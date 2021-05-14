import ReactDom from "react-dom";
import "./Overlay.css";

const Overlay = (props) =>
  ReactDom.createPortal(
    <div className="overlay" onClick={props.onClick}>
      {props.children}
    </div>,
    document.getElementById("overlay-root")
  );

export default Overlay;
