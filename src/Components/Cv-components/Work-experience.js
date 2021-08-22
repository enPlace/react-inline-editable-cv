import { useState } from "react";

/* 
So what do I need to do here-
submit the work object as a completed form. 

I need to take that information that is in userInfo and format it into html 
style it with css 

*/
const WorkExperience = ({ isEditable, setIsEditable, handleEditChange }) => {
  //On clicking the button, it should toggle the handleEditChange.
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

  if (isEditable !== "work" && !userInfo) {
    return (
      <div className="work-experience">
        <h2>WORK EXPERIENCE</h2>
        <button onClick={() => handleEditChange("work")}>
          + Work Experience
        </button>
      </div>
    );
  } else if (isEditable === "work") {
    return (
      <div className="work-experience">
        <h2>WORK EXPERIENCE</h2>
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
            <button type="reset" onClick = {()=>{
              setIsEditable(false)
            }}>Cancel</button>
            <button type="submit">Add work experience</button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="work-experience saved">
        <h2>WORK EXPERIENCE</h2>
        {userInfo.map((work) => {
          return (
            <div className="companyInfo">
              <h3 className="companyName">{work.company}</h3>
              <p className="companyCity">{work.companyCity}</p>
              <p className="companyDates">
                {work.fromdate} - {work.toDate}
              </p>
              <h5 className="companyPositionTitle">{work.positionTitle}</h5>
              <h4>Responsibilities:</h4>
              <ul>
                {work.responsibilities.map((responsibility) => {
                  return (
                    <li
                      className="responsibility"
                      id={"responsibility" + responsibility.id}
                      key = {responsibility.id}
                    >{responsibility.text}</li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <button onClick={() => handleEditChange("work")}>
          + Work Experiencte
        </button>
      </div>
    );
  }
};

export default WorkExperience;
