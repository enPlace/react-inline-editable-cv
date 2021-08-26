import EditWork from "./EditWork";

const SavedWorkExperience = ({
  userInfo,
  setUserInfo,
  isEditable,
  setIsEditable,
  cleanResp,
  setPos,
}) => {
  return !userInfo ? null : (
    <div className="work-experience saved">
      {userInfo.map((work) => {
        return isEditable === work.id ? (
          <EditWork
            cleanResp={cleanResp}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            id={work.id}
            setIsEditable={setIsEditable}
            setPos={setPos}
          ></EditWork>
        ) : (
          <div
            className="companyInfo"
            key={work.id}
            onClick={() => setIsEditable(work.id)}
          >
            <h3 className="companyName">{work.company}</h3>
            <p className="companyCity">{work.companyCity}</p>
            <p className="companyDates">
              {work.fromdate} - {work.toDate}
            </p>
            <h5 className="companyPositionTitle">{work.positionTitle}</h5>
            <h4>Responsibilities:</h4>
            <ul>
              {work.responsibilities.map((responsibility) => {
                return (
                  <li
                    className="responsibility"
                    id={"responsibility" + responsibility.id}
                    key={responsibility.id}
                  >
                    {responsibility.text}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SavedWorkExperience;
