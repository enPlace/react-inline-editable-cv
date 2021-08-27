import EditEducation from "./EditEducation";
const SavedEducation = ({
  userInfo,
  setUserInfo,
  isEditable,
  setIsEditable,
  setPos,
}) => {
  let key = 0;
  return !userInfo ? null : (
    <div className="userEducation">
      {userInfo.map((school) => {
        key++;
        return isEditable === school.id ? (
          <EditEducation
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            id={school.id}
            setIsEditable={setIsEditable}
            setPos={setPos}
          ></EditEducation>
        ) : (
          <div
            className="schoolObject"
            key={key}
            onClick={() => setIsEditable(school.id)}
          >
            <h3 className="degree">{school.degree}</h3>
            <div className="schoolInfo">
              <h4 className="schoolName">{school.schoolName}</h4>
              <div className="schoolCity"> -{school.city} </div>
            </div>

            <div className="dates">
              {school.fromDate} - {school.toDate}
            </div>

            <p className="description">{school.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SavedEducation;
