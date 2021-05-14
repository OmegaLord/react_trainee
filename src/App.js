import { useState } from "react";
import "./App.css";
import NewPerson from "./components/NewPerson/NewPerson";
import PersonList from "./components/Persons/PersonList";
import Container from "./components/UI/Container/Container";

const persons = [
  { name: "Jonh1", age: 20, id: 1 },
  { name: "Jonh2", age: 22, id: 2 },
  { name: "Jonh3", age: 23, id: 3 },
];


function App() {
  const [appPersons, setAppPersons] = useState(persons);

  const addNewPerson = (newPerson) => {
    setAppPersons((prevPersons) => {
      const nextId = Math.max(prevPersons.map((person) => person.id)) + 1;

      return [{ ...newPerson, id: nextId }, ...prevPersons];
    })
  }

  return (
    <Container>
      <NewPerson onPersonAdded={addNewPerson} />
      <PersonList persons={appPersons} />
    </Container>
  );
}

export default App;
