
import Name from "./PersonalInfoSubComponents/Name";
import Role from "./PersonalInfoSubComponents/Role";
import Contact from "./PersonalInfoSubComponents/Contact";
import AboutMe from "./PersonalInfoSubComponents/AboutMe";

const PersonalInfo = ({isEditable, setIsEditable, handleEditChange}) => {


  return (
    <div className="personal-info">
      <div className="primaryInfo">
      <Name isEditable={isEditable} handleEditChange={handleEditChange}></Name>
      <Role isEditable={isEditable} handleEditChange={handleEditChange}></Role>
      <AboutMe
      isEditable = {isEditable}
      setIsEditable = {setIsEditable}
      ></AboutMe>
      </div>
      <Contact
        isEditable={isEditable}
        handleEditChange={handleEditChange}
      ></Contact>
    </div>
  );
};

export default PersonalInfo;
