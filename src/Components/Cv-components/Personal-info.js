import Name from "./PersonalInfoSubComponents/Name";
import Role from "./PersonalInfoSubComponents/Role";
import Contact from "./PersonalInfoSubComponents/Contact";
import AboutMe from "./PersonalInfoSubComponents/AboutMe";

const PersonalInfo = ({
  viewStatus,
  isEditable,
  setIsEditable,
  handleEditChange,
}) => {
  return (
    <div className={"personal-info " + viewStatus}>
      <div className="primaryInfo">
        <Name
          isEditable={isEditable}
          handleEditChange={handleEditChange}
          viewStatus={viewStatus}
        ></Name>
        <Role
          isEditable={isEditable}
          handleEditChange={handleEditChange}
          viewStatus={viewStatus}
        ></Role>
        <AboutMe
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          viewStatus={viewStatus}
        ></AboutMe>
      </div>
      <Contact
        viewStatus={viewStatus}
        isEditable={isEditable}
        handleEditChange={handleEditChange}
      ></Contact>
    </div>
  );
};
export default PersonalInfo;
