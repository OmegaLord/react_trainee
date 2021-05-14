import PersonAge from "./PersonAge";
import "./PersonItem.css";

const PersonItem = (props) => {
  return (
    <div className="person_item__inner">
      {props.person.name} <PersonAge age={props.person.age} />
    </div>
  );
};

export default PersonItem;
