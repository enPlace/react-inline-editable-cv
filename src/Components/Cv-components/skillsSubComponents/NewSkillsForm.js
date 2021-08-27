const NewSkillsForm = ({
  viewStatus,
  newSkill,
  handleChange,
  handleSubmit,
  pos,
  setPos,
}) => {
  return viewStatus !== "edit" ? null : (
    <form
      action=""
      className="newSkill"
      onSubmit={(e) => {
        e.preventDefault();
        if (newSkill.text === "") {
        } else {
          handleSubmit();
          setPos(pos + 1);
        }
      }}
    >
      <input
        type="text"
        placeholder="add a new skill..."
        value={newSkill.text}
        id={newSkill.id}
        data-pos={pos}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default NewSkillsForm;
