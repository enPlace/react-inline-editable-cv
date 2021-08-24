import { useState } from "react";
import NewExperienceForm from "./workExperienceSubComponents/NewExperienceForm";
import SavedWorkExperience from "./workExperienceSubComponents/SavedWorkExperience";

const WorkExperience = () => {
  const [userInfo, setUserInfo] = useState(false);
  const [pos, setPos] = useState(0);
  const [isEditable, setIsEditable] = useState(false);
  const handleEditChange = (id) => {
    if (id && isEditable !== id) {
      setIsEditable(id);
    } else {
      setIsEditable(false);
    }
  };

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
    id: "",
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
  };
  const handleSubmit = (e) => {
    workObject.id = pos;
    if (!userInfo) {
      setUserInfo([workObject]);
    } else {
      userInfo.push(workObject);
    }
    setWorkObject(emptyWorkObject);
    setPos(pos + 1);
    setIsEditable(false);
  };

  return (
    <div className="work-experience">
      <h2>WORK EXPERIENCE</h2>
      <SavedWorkExperience
        userInfo={userInfo}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
      ></SavedWorkExperience>
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
