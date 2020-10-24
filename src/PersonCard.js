import React, { useState } from "react";

export default function PersonCard(props) {
  const [person, setPerson] = useState(props);
  const changeAge = () => {
    let agePlus = person.age + 1;
    setPerson({ ...person, age: agePlus });
  };

  //   ({ ...person, age: "Hello" });
  return (
    <div className="centerDiv">
      <h1>
        {person.lastName}, {person.firstName}
      </h1>
      <h3>{person.age}</h3>
      <h3>{person.hairColor}</h3>
      <button className="btn" onClick={changeAge}>
        Birthday button for {person.firstName} {person.lastName}
      </button>
    </div>
  );
}
