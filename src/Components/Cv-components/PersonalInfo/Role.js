import { useState } from "react"
const Role = ({isEditable, handleEditChange}) => {
    const [role, setRole] = useState({
        role: "Current Role",
        id: "currentRole"
    })
    const handleChange = (e) =>{
        setRole({
            ...role,
            role: e.target.value
        })
    }
    if(isEditable !== role.id){
        return (
            <div onClick = {()=>handleEditChange(role.id)}className="role">{role.role}</div>
        )
    }else{
        return (
            <form action="" key = {role.id} class = "role" id = "role">
                <input type="text" name = {role.id} value = {role.role} onChange = {(e)=>handleChange(e)} />
            </form>
        )
    }
  

}
 
export default Role;