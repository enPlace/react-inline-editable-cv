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
            <Name firstName = {persInfo.firstName} lastName = {persInfo.lastName}></Name>
            <Role persInfo = {persInfo}></Role>
            <Contact persInfo = {persInfo}></Contact>
        </div>
     );
}
 
export default PersonalInfo;