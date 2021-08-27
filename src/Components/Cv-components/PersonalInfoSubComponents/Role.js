import { useState } from "react";
const Role = ({viewStatus, isEditable, handleEditChange }) => {
  const [role, setRole] = useState({
    role: "Current Role",
    id: "currentRole",
  });

  const handleRoleChange = (e) => {
    setRole({
      ...role,
      role: e.target.value,
    });
  };
  

  return isEditable !== role.id ? (
    <div onClick={() => {
      if (viewStatus === "edit") handleEditChange(role.id)
      }} className="role">
      {role.role}
    </div>
  ) : (
    <form
      className="role-form"
      action=""
      key={role.id}
      id="role"
      onSubmit={(e) => {
        e.preventDefault();
        handleEditChange();
      }}
    >
      <input type="text" 
      name={role.id}
      value={role.role}
      onChange={(e) => handleRoleChange(e)}/>
    </form>
  );
};

export default Role;
