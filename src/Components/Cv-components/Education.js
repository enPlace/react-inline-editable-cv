import { useState } from "react";
import NewEducationForm from "./educationSubComponents/NewEducationForm";
import SavedEducation from "./educationSubComponents/SavedEducation";

const Education = ({ isEditable, setIsEditable, handleEditChange }) => {
  const [userInfo, setUserInfo] = useState(false);
  const emptyFormObject = {
    schoolName: "",
    city: "",
    fromDate: "",
    toDate: "",
    degree: "",
    description: "",
  };
  const [formState, setFormState] = useState(emptyFormObject);
  const handleChange = (e) => {
    const targ = e.target;
    setFormState({
      ...formState,
      [targ.name]: targ.value,
    });
  };
  const handleSubmit = () => {
    if (!userInfo) {
      setUserInfo([formState]);
    } else {
      userInfo.push(formState);
    }
    setFormState(emptyFormObject);
    setIsEditable(false)
  };
  return (
    <div className="education">
      <h2>Education</h2>
     <SavedEducation userInfo={userInfo}></SavedEducation> 
      <NewEducationForm
        isEditable = {isEditable}
        setIsEditable = {setIsEditable}
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></NewEducationForm>
      <button
        className="editEducation"
        onClick={() => handleEditChange("education")}
      >
        + Education
      </button>
    </div>
  );
};

export default Education;
