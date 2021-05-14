const PersonAge = (props) => {
  const personAgeContent = `(${props.age} ${
    props.age > 1 ? "years" : "year"
  } old)`;

  return personAgeContent;
};

export default PersonAge;
