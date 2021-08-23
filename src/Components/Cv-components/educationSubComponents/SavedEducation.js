const SavedEducation = ({ userInfo }) => {
  let key = 0;
  return !userInfo ? null : (
    <div className="userEducation">
      {userInfo.map((school) => {
        key++;
        return (
          <div className="schoolObject" key={key}>
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
