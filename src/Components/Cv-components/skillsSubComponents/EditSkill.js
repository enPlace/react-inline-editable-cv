import { useState } from "react";
import { deleteInfo } from "../../../Modules/DeleteInfo";
const EditSkill = ({ userInfo, setUserInfo, setIsEditable, setPos, id }) => {
  const [skill, setSkill] = useState(userInfo[id]);

  const handleChange = (value) => {
    setSkill({
      ...skill,
      text: value,
    });
  };
  const handleSubmit = () => {
    userInfo[id] = skill;
    setIsEditable(false);
  };

  return (
    <form
      action=""
      className="editSkill"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="text"
        value={skill.text}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="buttons">
        <button
          type="button"
          onClick={() => {
            deleteInfo(userInfo, setUserInfo, setPos, id);
            setIsEditable(false);
          }}
        >
          del
        </button>

        <button type="button" onClick={() => setIsEditable(false)}>
          cancel
        </button>

        <button type="submit">&#10003;</button>
      </div>
    </form>
  );
};

export default EditSkill;
