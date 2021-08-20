import { useState } from "react";
import LocationIcon from "./locationIcon.svg";
import PhoneIcon from "./mobile-phone.svg";
import EmailIcon from "./email2.svg";
import LinkedIcon from "./linkedin.svg";

const Contact = ({ handleEditChange, isEditable}) => {
  /* for each of the items in contactInfo, I need to: 
    1. check to see if it is editable or not. 
    2. if !editable, display normal div. 
         2a. Normal div should have: git
          - a function that says, onClick, set this thing to editable. 
          - a name that matches the id
          - a key that matches the id 
          
*/
  const [contactInfo, setContactInfo] = useState([
    { text: "address 1", icon: LocationIcon, pos: 0, id: "address1" },
    { text: "address 2", icon: LocationIcon, pos: 1, id: "address2" },
    { text: "phone", icon: PhoneIcon, pos: 2, id: "phone" },
    { text: "email", icon: EmailIcon, pos: 3, id: "email" },
    { text: "LinkedIn", icon: LinkedIcon, pos: 4, id: "linkedIn" },
  ]);

  const handleChange = (e)=>{
   const list = contactInfo.filter(item=> item.id !== e.target.name)
   const target = contactInfo.filter(item =>item.id === e.target.name)
   target[0].text = e.target.value
   list.splice(target.[0].pos, 0, target[0])
   console.log(list)
   setContactInfo(list)
  }
  return (
    <div className="contact">
      {contactInfo.map((item) => {
        if (isEditable !== item.id) {
          return (
            <div key={item.id} className="contactItem">
              <div
                onClick={() => {
                  handleEditChange(item.id);
                }}
                name={item.id}
                className="contactItemName"
              >
                {item.text}
              </div>
              <img src={item.icon} alt="" />
            </div>
          );
        } else {
          return (
            <div className="contactItem">
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEditChange();
                }}
              >
                <input
                  name={item.id}
                  type="text"
                  value={item.text}
                  onChange={handleChange}
                  onClick = {(e)=>e.target.select()}
                />
              </form>
              <img src={item.icon} alt="" />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Contact;
