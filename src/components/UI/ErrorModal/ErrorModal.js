import ReactDom from "react-dom";
import Button from "../Button/Button";
import Cart from "../Cart/Cart";
import Overlay from "../Overlay/Overlay";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <Overlay onClick={props.onConfirm}>
      {ReactDom.createPortal(
        <Cart className="error_modal">
          <h2>{props.title}</h2>
          <p>{props.message}</p>
          <Button onClick={props.onConfirm}>Ok</Button>
        </Cart>,
        document.getElementById("modal-root")
      )}
    </Overlay>
  );
};

export default ErrorModal;
