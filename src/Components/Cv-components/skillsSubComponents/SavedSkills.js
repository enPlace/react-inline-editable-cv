import EditSkill from "./EditSkill";
const SavedSkills = ({
  viewStatus,
  userInfo,
  setUserInfo,
  isEditable,
  setIsEditable,
  setPos,
}) => {
  return !userInfo ? null : (
    <div className="skillsContainer">
      {userInfo.map((skill) => {
        return isEditable === skill.id ? (
          <EditSkill
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setIsEditable={setIsEditable}
            setPos={setPos}
            id={skill.id}
          ></EditSkill>
        ) : (
          <div
            className="skill"
            key={skill.id}
            onClick={() => {
              if (viewStatus === "edit") setIsEditable(skill.id);
            }}
          >
            {skill.text}
          </div>
        );
      })}
    </div>
  );
};

export default SavedSkills;
