import { useState } from "react";

const WorkExperience = ({ isEditable, handleEditChange }) => {
  //On clicking the button, it should toggle the handleEditChange.
  const [userInfo, setUserInfo] = useState (false)

  const [workObject, setWorkObject] = useState([
    {
        company:"",
        companyCity: "",
        fromDate:"",
        toDate:"",
        positionTitle:"",
        responsibilities: {
            responsibility1: "", 
            responsibility2: "",
            responsibility3: "",
            responsibility4: "",
            responsibility5: "",
        }
    }
  ])

  const handleChange = (e)=>{
    const obj = [...workObject];
    const targ = e.target
    if(targ.classList.contains("responsibility")){
        obj[0].responsibilities[targ.name] = targ.value
    }else{
        obj[0][targ.name] = targ.value
    }
    setWorkObject(obj)
    
  }
  return isEditable !== "work" ? (
    <div className="work-experience">
      <h2>WORK EXPERIENCE</h2>
      <button onClick = {()=>handleEditChange("work")} >+ Work Experience</button>
    </div>
  ) : (
    <div className="work-experience">
      <h2>WORK EXPERIENCE</h2>
      <form action="" onSubmit = {(e)=>{
          e.preventDefault();
      }}>
          <label htmlFor="company">Company name: </label>
            <input onChange = {(e) =>handleChange(e)} value = {workObject.company} name = "company" type="text" className="company" />
            <label htmlFor="companyCity">City/State:</label>
            <input onChange = {(e) =>handleChange(e)} value = {workObject.companyCity} name = "companyCity" placeholder = "Washington, D.C."type="text" className="companyCity" />
            <label htmlFor="fromDate">From:</label>
            <input onChange = {(e) =>handleChange(e)} value = {workObject.fromDate} name = "fromDate" placeholder = "mm/dd/yyyy" type="text" className="fromDate" />
            <label htmlFor="toDate">To:</label>
            <input onChange = {(e) =>handleChange(e)} value = {workObject.toDate} name = "toDate" placeholder = "mm/dd/yyyy" type="text" className="toDate" />
            <label htmlFor="positionTitle">Position title:</label>
            <input onChange = {(e) =>handleChange(e)} value = {workObject.positionTitle} name = "positionTitle" type="text" className="positionTitle" />
            <label htmlFor="responsibilities">Responsibilities:</label>
            <input onChange = {(e) =>handleChange(e)} value = {workObject.responsibility1} name = "responsibility1" placeholder = "" type="text" className="responsibility" />
            <input onChange = {(e) =>handleChange(e)} value = {workObject.responsibility2} name = "responsibility2" type="text" className="responsibility" />
            <button className="addResponsibility">+ New Responsibility</button>
        <div className="formButtons">
            <button type="reset">Cancel</button>
            <button type="submit">Add work experience</button>
        </div>

      </form>
    </div>
  );
};

export default WorkExperience;
