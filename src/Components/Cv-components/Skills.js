import { useState } from "react";
import NewSkillsForm from "./skillsSubComponents/NewSkillsForm";
import SavedSkills from "./skillsSubComponents/SavedSkills";

const Skills = ({ isEditable, setIsEditable, handleEditChange }) => {
  const [userInfo, setUserInfo] = useState(false);
  const emptySkill = { text: "", id: "", pos: "" };
  const [newSkill, setNewSkill] = useState(emptySkill);

  const handleChange = (e) => {
    const targ = e.target;
    setNewSkill({
      ...newSkill,
      [targ.name]: targ.value,
      [targ.pos]: targ.pos,
      [targ.id]: targ.id,
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
    <div className="skills">
      <h2>Skills</h2>
      <NewSkillsForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></NewSkillsForm>
      <SavedSkills userInfo={userInfo}></SavedSkills>
    </div>
  );
};

export default Skills;
