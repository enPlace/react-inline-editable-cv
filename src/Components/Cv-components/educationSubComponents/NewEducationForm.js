const NewEducationForm = ({
  isEditable,
  formState,
  handleChange,
  handleSubmit,
  setIsEditable,
}) => {
  return isEditable !== "education" ? null : (
    <form
      action=""
      className="educationForm"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <label htmlFor="educaitonName">School or Institution:</label>
      <input
        type="text"
        name="schoolName"
        value={formState.schoolName}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        name="city"
        value={formState.city}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <label htmlFor="fromDate">From: </label>
      <input
        type="text"
        name="fromDate"
        value={formState.fromDate}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <label htmlFor="toDate">To:</label>
      <input
        type="text"
        name="toDate"
        value={formState.toDate}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <label htmlFor="degree">Degree, certification or title:</label>
      <input
        type="text"
        name="degree"
        value={formState.degree}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <label htmlFor="description">Description or other information:</label>
      <input
        type="text"
        name="description"
        value={formState.description}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <div className="buttons">
        <button type="button" onClick={() => setIsEditable(false)}>
          Cancel
        </button>
        <button type="submit">Add school</button>
      </div>
    </form>
  );
};

export default NewEducationForm;
