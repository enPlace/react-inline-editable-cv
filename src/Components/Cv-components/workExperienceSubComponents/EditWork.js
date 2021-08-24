import { useState } from "react";
const EditWork = ({ userInfo, setUserInfo, id, setIsEditable}) => {
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
    userInfo[id] = workObject;
    setIsEditable(false)
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
        <label htmlFor="positionTitle">Position title:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.positionTitle}
          name="positionTitle"
          type="text"
          className="positionTitle"
        />
        <label htmlFor="responsibilities">Responsibilities:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.responsibilities[0].text}
          name="0"
          placeholder=""
          type="text"
          className="responsibility"
        />
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.responsibilities[1].text}
          name="1"
          type="text"
          className="responsibility"
        />
        <button className="addResponsibility">+ New Responsibility</button>
        <div className="formButtons">
          <button
            type="reset"
            onClick={() => {
              setIsEditable(false);
            }}
          >
            Cancel
          </button>
          <button type="submit">Save changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditWork;
