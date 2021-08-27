import EditWork from "./EditWork";

const SavedWorkExperience = ({
  viewStatus,
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
            onClick={() => {if (viewStatus === "edit")setIsEditable(work.id)}}
          >
            <h3 className="companyPositionTitle">{work.positionTitle}</h3>
            <div className="placeOfWork">
            <h4 className="companyName">{work.company}</h4>
            <p className="companyCity"> - {work.companyCity}</p>
            </div>
            <p className="companyDates">
              {work.fromDate} - {work.toDate}
            </p>

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
