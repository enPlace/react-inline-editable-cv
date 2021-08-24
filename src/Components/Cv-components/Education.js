import { useState } from "react";
import NewEducationForm from "./educationSubComponents/NewEducationForm";
import SavedEducation from "./educationSubComponents/SavedEducation";

const Education = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [pos, setPos] = useState(0);

  const handleEditChange = (id) => {
    if (id && isEditable !== id) {
      setIsEditable(id);
    } else {
      setIsEditable(false);
    }
  };
  const [userInfo, setUserInfo] = useState(false);
  const emptyFormObject = {
    schoolName: "",
    city: "",
    fromDate: "",
    toDate: "",
    degree: "",
    description: "",
    id: "",
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
    formState.id = pos;
    setPos(pos + 1);
    if (!userInfo) {
      setUserInfo([formState]);
    } else {
      userInfo.push(formState);
    }
    setFormState(emptyFormObject);
    setIsEditable(false);
  };
  return (
    <div className="education">
      <h2>Education</h2>
      <SavedEducation
        userInfo={userInfo}
        isEditable={isEditable}
        setIsEditable = {setIsEditable}
      ></SavedEducation>
      <NewEducationForm
        isEditable={isEditable}
        setIsEditable={setIsEditable}
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
