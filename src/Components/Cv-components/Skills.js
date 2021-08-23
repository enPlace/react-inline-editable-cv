import { useState } from "react";
import NewSkillsForm from "./skillsSubComponents/NewSkillsForm";
import SavedSkills from "./skillsSubComponents/SavedSkills";

const Skills = ({ isEditable, setIsEditable, handleEditChange }) => {
  const [userInfo, setUserInfo] = useState(false);
  const emptySkill = { text: "", id: "", pos: "" };
  const [newSkill, setNewSkill] = useState(emptySkill);

  const handleChange = (e) => {
    setNewSkill({
      ...newSkill,
      text: e.target.value,
      pos: e.target.dataset.pos,
      id: e.target.value,
    });

  };
  const handleSubmit = () => {
    if (!userInfo) {
      setUserInfo([newSkill]);
    } else {
      userInfo.push(newSkill);
    }
    console.log(userInfo)
    setNewSkill(emptySkill);
  };

  return (
    <div className="skills">
      <h2>Skills</h2>
      <SavedSkills userInfo={userInfo}></SavedSkills>
      <NewSkillsForm
        newSkill={newSkill}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></NewSkillsForm>
      
    </div>
  );
};

export default Skills;
