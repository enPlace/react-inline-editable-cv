import { useState } from "react";
import PersonalInfo from "./Cv-components/Personal-info";
import WorkExperience from "./Cv-components/Work-experience";
const Cv = () => {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditChange = (id) => {
    if (id && isEditable !== id) {
      setIsEditable(id);
    } else {
      setIsEditable(false);
    }
  };
  return (
    <div className="cv-body">
      <PersonalInfo
        handleEditChange={handleEditChange}
        isEditable={isEditable}
      ></PersonalInfo>
      <WorkExperience isEditable = {isEditable} setIsEditable = {setIsEditable} handleEditChange = {handleEditChange}></WorkExperience>
    </div>
  );
};

export default Cv;
