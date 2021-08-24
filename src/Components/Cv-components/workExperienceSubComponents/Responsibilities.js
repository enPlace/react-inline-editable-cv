import { useState } from "react";
const Responsibilities = ({ workObject, setWorkObject, handleChange }) => {
  const [respId, setRespId] = useState(2);
  const newResponsibility = () => {
    const obj = { ...workObject };
    obj.responsibilities[respId] = { text: "", id: respId };
    setWorkObject(obj)
    setRespId(respId + 1);
  };

  return (
    <div className="responsibilities">
      <label htmlFor="responsibilities">Responsibilities:</label>
      {workObject.responsibilities.map((resp) => {
        return (
          <input
            onChange={(e) => handleChange(e)}
            value={resp.text}
            name={resp.id}
            placeholder=""
            type="text"
            className="responsibility"
          />
        );
      })}
      <button
        className="addResponsibility"
        onClick={(e) => {
          e.preventDefault();
          newResponsibility();
        }}
      >
        + Responsibility
      </button>
    </div>
  );
};

export default Responsibilities;
