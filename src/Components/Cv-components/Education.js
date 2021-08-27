import { useState } from "react";
import NewEducationForm from "./educationSubComponents/NewEducationForm";
import SavedEducation from "./educationSubComponents/SavedEducation";

const Education = ({ viewStatus }) => {
  const emptyFormObject = {
    schoolName: "",
    city: "",
    fromDate: "",
    toDate: "",
    degree: "",
    description: "",
    id: "",
  };
  const sampleEducationObject = {
    schoolName: "School Name",
    city: "City, State",
    fromDate: "MONTH 20XX",
    toDate: "MONTH 20XX",
    degree: "Click to Edit",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
    id: "0",
  };
  const [isEditable, setIsEditable] = useState(false);
  const [pos, setPos] = useState(1);

  const handleEditChange = (id) => {
    if (id && isEditable !== id) {
      setIsEditable(id);
    } else {
      setIsEditable(false);
    }
  };
  const [userInfo, setUserInfo] = useState([sampleEducationObject]);

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
    <div className={"education " + viewStatus}>
      <h2>Education</h2>
      <SavedEducation
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        setPos={setPos}
        viewStatus = {viewStatus}
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
