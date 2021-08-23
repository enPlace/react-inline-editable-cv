const NewSkillsForm = ({userInfo, isEditable, setIsEditable}) => {
    return ( 
        <form action="" className="newSkill">
            <input type="text" placeholder="add a new skill..." />
            <button type="submit">+</button>
        </form>
     );
}
 
export default NewSkillsForm;