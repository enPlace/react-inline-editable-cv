const SavedSkills = ({userInfo}) => {
    return !userInfo ? null : (
        <div className="skillsContainer">
        {userInfo.map(skill=>{
            return <div className="skill" key = {skill.id}>{skill.text}</div>
        })}
        </div>
    );
}
 
export default SavedSkills;