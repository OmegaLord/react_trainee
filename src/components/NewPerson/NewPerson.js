import { useState } from "react";
import Button from "../UI/Button/Button";
import Cart from "../UI/Cart/Cart";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import InputContainer from "../UI/InputContainer/InputContainer";

const NewPerson = (props) => {
  const [newPerson, setNewPerson] = useState({ name: "", age: 0 });
  const [error, setError] = useState();

  const nameChangedHandler = (newName) =>
    setNewPerson((prev) => {
      return { ...prev, name: newName };
    });

  const ageChangedHandler = (newAge) =>
    setNewPerson((prev) => {
      return { ...prev, age: newAge };
    });

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      newPerson.name.trim().length === 0 ||
      newPerson.age.trim().length === 0
    ) {
      return setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
    }
    if (+newPerson.age < 1) {
      return setError({
        title: "Invalid input",
        message: "Please enter a valid age",
      });
    }
    setNewPerson((prev) => {
      return { ...prev, name: "", age: "" };
    });
    props.onPersonAdded(newPerson);
  };

  const errorHandler = () => setError(null);

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Cart>
        <form onSubmit={submitHandler}>
          <InputContainer
            label="Name"
            value={newPerson.name}
            onChange={nameChangedHandler}
          />
          <InputContainer
            label="Age(Years)"
            value={newPerson.age}
            onChange={ageChangedHandler}
          />
          <div className="form_actions">
            <Button type="submit">Add New person</Button>
          </div>
        </form>
      </Cart>
    </>
  );
};

export default NewPerson;
