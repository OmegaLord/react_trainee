import Cart from "../UI/Cart/Cart";
import PersonItem from "./PersonItem";
import "./PersonList.css";

const PersonList = (props) => {
  return (
    <ul>
      {props.persons.map((person) => {
        return (
          <li key={person.id}>
            <Cart className="person_item">
              <PersonItem person={person} />
            </Cart>
          </li>
        );
      })}
    </ul>
  );
};

export default PersonList;
