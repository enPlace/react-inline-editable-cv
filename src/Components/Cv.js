import { useState } from "react";
import PersonalInfo from "./Cv-components/Personal-info";
import WorkExperience from "./Cv-components/Work-experience";
import Education from "./Cv-components/Education";
import Skills from "./Cv-components/Skills";
const Cv = ({ viewStatus }) => {
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
        setIsEditable={setIsEditable}
        viewStatus={viewStatus}
      ></PersonalInfo>
      <Skills
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        handleEditChange={handleEditChange}
        viewStatus={viewStatus}
      ></Skills>
      <WorkExperience
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        handleEditChange={handleEditChange}
        viewStatus={viewStatus}
      ></WorkExperience>
      <Education
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        handleEditChange={handleEditChange}
        viewStatus={viewStatus}
      ></Education>
    </div>
  );
};

export default Cv;
