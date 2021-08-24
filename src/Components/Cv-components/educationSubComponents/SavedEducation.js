import EditEducation from "./EditEducation";
const SavedEducation = ({ userInfo, isEditable, setIsEditable }) => {
  let key = 0;
  return !userInfo ? null : (
    <div className="userEducation">
      {userInfo.map((school) => {
        key++;
        return isEditable === school.id ? (
          <EditEducation
          userInfo = {userInfo}
          id = {school.id}
          setIsEditable = {setIsEditable}
          ></EditEducation>

        )
        : (
          <div className="schoolObject" key={key} onClick = {()=>setIsEditable(school.id)}>
            <h3 className="schoolName">{school.schoolName}</h3>
            <div className="schoolCity"> {school.city} </div>
            <div className="dates">
              {school.fromDate} - {school.toDate}
            </div>
            <h4 className="degree">{school.degree}</h4>
            <p className="description">{school.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SavedEducation;
