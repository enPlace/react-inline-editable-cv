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
        <label htmlFor="company">Company name: </label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.company}
          name="company"
          type="text"
          className="company"
        />
        <label htmlFor="companyCity">City/State:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.companyCity}
          name="companyCity"
          placeholder="Washington, D.C."
          type="text"
          className="companyCity"
        />
        <label htmlFor="fromDate">From:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.fromDate}
          name="fromDate"
          placeholder="mm/dd/yyyy"
          type="text"
          className="fromDate"
        />
        <label htmlFor="toDate">To:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.toDate}
          name="toDate"
          placeholder="mm/dd/yyyy"
          type="text"
          className="toDate"
        />
        <label htmlFor="positionTitle">Position title:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={workObject.positionTitle}
          name="positionTitle"
          type="text"
          className="positionTitle"
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