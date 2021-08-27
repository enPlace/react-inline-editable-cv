const TogglePreview = ({ viewStatus, setViewStatus }) => {
  return (
    <div className="togglePreview">
      <button
        type="button"
        className={viewStatus}
        onClick={() => setViewStatus("edit")}
      >
        Edit
      </button>
      <button
        type="button"
        className={viewStatus}
        onClick={() => setViewStatus("preview")}
      >
        Preview
      </button>
    </div>
  );
};

export default TogglePreview;
