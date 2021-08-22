import { useState } from "react";
import NewExperienceForm from "./workExperienceSubComponents/NewExperienceForm";
import SavedWorkExperience from "./workExperienceSubComponents/SavedWorkExperience";

const WorkExperience = ({ isEditable, setIsEditable, handleEditChange }) => {

  const [userInfo, setUserInfo] = useState(false);

  const emptyWorkObject = {
    company: "",
    companyCity: "",
    fromDate: "",
    toDate: "",
    positionTitle: "",
    responsibilities: [
      { text: "", id: "" },
      { text: "", id: "" },
    ],
  };
  const [workObject, setWorkObject] = useState(emptyWorkObject);

  const handleChange = (e) => {
    const obj = { ...workObject };
    const targ = e.target;
    if (targ.classList.contains("responsibility")) {
      obj.responsibilities[targ.name].text = targ.value;
      obj.responsibilities[targ.name].id = targ.name;
    } else {
      obj[targ.name] = targ.value;
    }
    setWorkObject(obj);
    console.log(workObject);
  };
  const handleSubmit = (e) => {
    if (!userInfo) {
      setUserInfo([workObject]);
    } else {
      userInfo.push(workObject);
    }
    setWorkObject(emptyWorkObject);
    setIsEditable(false);
  };

  return (
    <div className="work-experience">
      <h2>WORK EXPERIENCE</h2>
      <SavedWorkExperience userInfo={userInfo}></SavedWorkExperience>
      <NewExperienceForm
        isEditable={isEditable}
        handleChange={handleChange}
        workObject={workObject}
        handleSubmit={handleSubmit}
        setIsEditable={setIsEditable}
      ></NewExperienceForm>
      <button onClick={() => handleEditChange("work")}>
        + Work Experience
      </button>
    </div>
  );
};

export default WorkExperience;
