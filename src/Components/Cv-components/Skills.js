import { useState } from "react";
import NewSkillsForm from "./skillsSubComponents/NewSkillsForm";
import SavedSkills from "./skillsSubComponents/SavedSkills";

const Skills = ({viewStatus}) => {
  const emptySkill = { text: "", id: "" };
  const sampleSkill = {text: "Add a skill, or click me to edit", id: "0"}
  const [userInfo, setUserInfo] = useState([sampleSkill]);

  const [newSkill, setNewSkill] = useState(emptySkill);
  const [pos, setPos] = useState(1);
  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (e) => {
    setNewSkill({
      ...newSkill,
      text: e.target.value,
      id: e.target.dataset.pos,
    });
  };
  const handleSubmit = () => {
    if (!userInfo) {
      setUserInfo([newSkill]);
    } else {
      userInfo.push(newSkill);
    }
    setNewSkill(emptySkill);
  };

  return (
    <div className={"skills " + viewStatus}>
      <h2>Skills</h2>
      <SavedSkills
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        setPos={setPos}
        viewStatus = {viewStatus}
      ></SavedSkills>
      <NewSkillsForm
        newSkill={newSkill}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        pos={pos}
        setPos={setPos}
        viewStatus = {viewStatus}
      ></NewSkillsForm>
    </div>
  );
};

export default Skills;
