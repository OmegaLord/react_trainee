import "./InputContainer.css";

const InputContainer = (props) => {
  const changeHandler = (event) => props.onChange(event.target.value);

  return (
    <div className="form-container">
      <label>{props.label}</label>
      <input type="text" onChange={changeHandler} value={props.value} />
    </div>
  );
};

export default InputContainer;
