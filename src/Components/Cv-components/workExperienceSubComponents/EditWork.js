import { useState } from "react";
import Responsibilities from "./Responsibilities";
import { deleteInfo } from "../../../Modules/DeleteInfo";
const EditWork = ({
  userInfo,
  setUserInfo,
  id,
  setIsEditable,
  cleanResp,
  setPos,
}) => {
  const [workObject, setWorkObject] = useState(userInfo[id]);

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
  const handleSubmit = () => {
    cleanResp(workObject);
    userInfo[id] = workObject;
    setIsEditable(false);
  };
  return (
    <div className="work-experience-form">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="positionTitle">Position/Title:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.positionTitle}
          name="positionTitle"
          type="text"
          className="positionTitle"
        />
        <label htmlFor="company">Company name: </label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.company}
          name="company"
          type="text"
          className="company"
        />
        <label htmlFor="companyCity">City/State:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.companyCity}
          name="companyCity"
          placeholder="Washington, D.C."
          type="text"
          className="companyCity"
        />
        <label htmlFor="fromDate">From:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.fromDate}
          name="fromDate"
          placeholder="mm/dd/yyyy"
          type="text"
          className="fromDate"
        />
        <label htmlFor="toDate">To:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.toDate}
          name="toDate"
          placeholder="mm/dd/yyyy"
          type="text"
          className="toDate"
        />

        <Responsibilities
          workObject={workObject}
          setWorkObject={setWorkObject}
          handleChange={handleChange}
        ></Responsibilities>
        <div className="formButtons">
          <button
            type="button"
            onClick={() => {
              setIsEditable(false);
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              setIsEditable(false);
              deleteInfo(userInfo, setUserInfo, setPos, id);
            }}
          >
            Delete
          </button>
          <button type="submit">Save changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditWork;
