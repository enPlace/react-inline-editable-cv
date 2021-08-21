import { useState } from "react";
import Name from "./PersonalInfo/Name";
import Role from "./PersonalInfo/Role";
import Contact from "./PersonalInfo/Contact";

const PersonalInfo = ({isEditable, handleEditChange}) => {
/*   const [isEditable, setIsEditable] = useState(false);

  const handleEditChange = (id) => {
    if (id && isEditable !== id) {
      setIsEditable(id);
    } else {
      setIsEditable(false);
    }
  }; */

  return (
    <div className="personal-info">
      <Name isEditable={isEditable} handleEditChange={handleEditChange}></Name>
      <Role isEditable={isEditable} handleEditChange={handleEditChange}></Role>
      <Contact
        isEditable={isEditable}
        handleEditChange={handleEditChange}
      ></Contact>
    </div>
  );
};

export default PersonalInfo;
