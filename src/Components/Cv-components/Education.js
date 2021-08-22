import { useState } from "react";
import NewEducationForm from "./educationSubComponents/NewEducationForm";
import SavedEducation from "./educationSubComponents/SavedEducation";

const Education = ({ isEditable, setIsEditable, handleEditChange }) => {
  const [userInfo, setUserinfo] = useState(false);
  const emptyEducationObject = {
    name: "",
    city: "",
    fromDate: "",
    toDate: "",
    degree: "",
    description: "",
  };
  const [educationObject, setEducationObject] = useState(emptyEducationObject);
  return (
    <div className="education">
      <h2>Education</h2>
      <SavedEducation></SavedEducation>
      <NewEducationForm></NewEducationForm>
      <button
        className="editEducation"
        onClick={() => handleEditChange("work")}
      >
        + Education
      </button>
    </div>
  );
};

export default Education;
