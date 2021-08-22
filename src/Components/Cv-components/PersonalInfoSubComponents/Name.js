import { useState } from "react";

const Name = ({ isEditable, handleEditChange }) => {
  const [names, setNames] = useState([
    { text: "First Name", pos: "0", id: "firstName" },
    { text: "Last Name", pos: "1", id: "lastName" },
  ]);
  const handleChange = (e) => {
    const targ = e.target;
    const obj2 = [...names];
    obj2[targ.id].text = targ.value;
    setNames(obj2);
  };

  return (
    <div className="name">
      {names.map((name) => {
        if (isEditable !== name.id) {
          return (
            <h1
              key={name.id}
              pos={name.pos}
              onClick={() => handleEditChange(name.id)}
            >
              {name.text}
            </h1>
          );
        } else {
          return (
            <form
              className= "nameForm"
              action=""
              key={name.id}
              onSubmit={(e) => {
                e.preventDefault();
                handleEditChange();
              }}
            >
              <input
                type="text"
                value={name.text}
                id={name.pos}
                name={name.id}
                onChange={(e) => handleChange(e)}
              />
            </form>
          );
        }
      })}
    </div>
  );
};

export default Name;
