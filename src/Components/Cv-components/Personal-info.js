import { useState } from "react";
import Name from "./PersonalInfo/Name";
import Role from "./PersonalInfo/Role";
import Contact from "./PersonalInfo/Contact";

const PersonalInfo = () => {
    const [persInfo, setPersInfo] = useState({
        firstName: "First Name",
        lastName: "Last Name",
        role: "Current Role",
        address1: "address 1",
        address2: "address 2",
        phone: "phone",
        email: "email",
        linkedIn: "LinkedIn"
    })
    return ( 
        <div className="personal-info">
            <Name></Name>
            <Role></Role>
            <Contact></Contact>
        </div>
     );
}
 
export default PersonalInfo;