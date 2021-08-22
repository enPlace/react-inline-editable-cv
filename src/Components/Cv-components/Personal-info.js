
import Name from "./PersonalInfoSubComponents/Name";
import Role from "./PersonalInfoSubComponents/Role";
import Contact from "./PersonalInfoSubComponents/Contact";

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
