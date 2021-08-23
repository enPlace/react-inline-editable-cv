const SavedWorkExperience = ({ userInfo }) => {

  return !userInfo ? null : (
    <div className="work-experience saved">
      {userInfo.map((work) => {
        return (
          <div className="companyInfo">
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
