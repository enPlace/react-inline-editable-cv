import { useState } from "react";
const NewSkillsForm = ({ newSkill, handleChange, handleSubmit }) => {
    const [pos, setPos] = useState(0)
  return (
    <form
      action=""
      className="newSkill"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        setPos(pos+1);
      }}
    >
      <input
        type="text"
        placeholder="add a new skill..."
        value={newSkill.text}
        id={newSkill.id}
        data-pos={pos}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default NewSkillsForm;
