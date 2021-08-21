
import Name from "./PersonalInfo/Name";
import Role from "./PersonalInfo/Role";
import Contact from "./PersonalInfo/Contact";

const PersonalInfo = ({isEditable, handleEditChange}) => {


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
