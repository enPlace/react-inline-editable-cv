import { useState } from "react";
import Name from "./PersonalInfo/Name";
import Role from "./PersonalInfo/Role";
import Contact from "./PersonalInfo/Contact";

const PersonalInfo = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [persInfo, setPersInfo] = useState([
    {
      firstName: "First Name",
      lastName: "Last Name",
      role: "Current Role",
    },
  ]);

  const handleEditChange = (id) => {
    if (id&&isEditable !== id) {
      setIsEditable(id);
    } else {
      setIsEditable(false);
    }
  };
  const handleChange = (e) => {
    let newState = persInfo;
    console.log(newState);
    newState[0][e.target.name].content = e.target.value;
    console.log(newState);
    setPersInfo(newState);
    console.log(persInfo);
  };

  return (
    <div className="personal-info" >
      <Name
        firstName={persInfo[0].firstName}
        lastName={persInfo[0].lastName}
      ></Name>
      <Role persInfo={persInfo}></Role>
      <Contact
        persInfo={persInfo}
        isEditable={isEditable}
        handleEditChange={handleEditChange}
        handleChange={handleChange}
      ></Contact>
    </div>
  );
};

export default PersonalInfo;
