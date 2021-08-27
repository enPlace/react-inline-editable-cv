import Responsibilities from "./Responsibilities";
const NewExperienceForm = ({
  handleChange,
  workObject,
  handleSubmit,
  isEditable,
  setIsEditable,
  setWorkObject,
}) => {
  return isEditable !== "work" ? null : (
    <div className="work-experience-form">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="positionTitle">Position/Title:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.positionTitle}
          name="positionTitle"
          type="text"
          className="positionTitle"
          onClick={(e) => e.target.select()}
        />
        <label htmlFor="company">Company name: </label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.company}
          name="company"
          type="text"
          className="company"
          onClick={(e) => e.target.select()}
        />
        <label htmlFor="companyCity">City/State:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.companyCity}
          name="companyCity"
          placeholder="Washington, D.C."
          type="text"
          className="companyCity"
          onClick={(e) => e.target.select()}
        />
        <label htmlFor="fromDate">From:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.fromDate}
          name="fromDate"
          placeholder="MONTH 20XX"
          type="text"
          className="fromDate"
          onClick={(e) => e.target.select()}
        />
        <label htmlFor="toDate">To:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.toDate}
          name="toDate"
          placeholder="MONTH 20XX"
          type="text"
          className="toDate"
          onClick={(e) => e.target.select()}
        />

        <Responsibilities
          workObject={workObject}
          setWorkObject={setWorkObject}
          handleChange={handleChange}
        ></Responsibilities>

        <div className="formButtons">
          <button
            type="reset"
            onClick={() => {
              setIsEditable(false);
            }}
          >
            Cancel
          </button>
          <button type="submit">Add work experience</button>
        </div>
      </form>
    </div>
  );
};
export default NewExperienceForm;
