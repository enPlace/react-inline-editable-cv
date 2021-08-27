import { useState } from "react";
import NewExperienceForm from "./workExperienceSubComponents/NewExperienceForm";
import SavedWorkExperience from "./workExperienceSubComponents/SavedWorkExperience";

const WorkExperience = () => {
  const emptyWorkObject = {
    company: "",
    companyCity: "",
    fromDate: "",
    toDate: "",
    positionTitle: "",
    responsibilities: [
      { text: "", id: "0" },
      { text: "", id: "1" },
    ],
    id: "",
  };
  const sampleWorkObject = {
    positionTitle: "Click me to edit",
    company: "Company",
    companyCity: "City, State",
    fromDate: "MONTH 20XX",
    toDate: "PRESENT",
    responsibilities: [
      { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", id: "0" },
      { text: "Aenean ac interdum nisi. Sed in consequat mi.", id: "1" },
    ],
    id: "0",
  }
  const [userInfo, setUserInfo] = useState([sampleWorkObject]);
  const [pos, setPos] = useState(1);
  const [isEditable, setIsEditable] = useState(false);
  const handleEditChange = (id) => {
    if (id && isEditable !== id) {
      setIsEditable(id);
    } else {
      setIsEditable(false);
    }
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
  const cleanResp = (workobj) => {
    let position = 0;
    const resp = workobj.responsibilities.filter((resp) => resp.text !== "");
    resp.forEach((resp) => {
      resp.id = position;
      position++;
    });
    workobj.responsibilities = resp;
  };
  const handleSubmit = (e) => {
    workObject.id = pos;
    cleanResp(workObject);
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
        setUserInfo={setUserInfo}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        cleanResp={cleanResp}
        setPos={setPos}
      ></SavedWorkExperience>
      <NewExperienceForm
        isEditable={isEditable}
        handleChange={handleChange}
        workObject={workObject}
        handleSubmit={handleSubmit}
        setIsEditable={setIsEditable}
        setWorkObject={setWorkObject}
      ></NewExperienceForm>
      <button onClick={() => handleEditChange("work")}>
        + Work Experience
      </button>
    </div>
  );
};

export default WorkExperience;
