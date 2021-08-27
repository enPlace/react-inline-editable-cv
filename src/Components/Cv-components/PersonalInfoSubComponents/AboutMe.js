import { useState } from "react";
const AboutMe = ({ viewStatus, isEditable, setIsEditable }) => {
  const [about, setAbout] = useState({
    about:
      "About me: Click on any text on the cv template to edit, or click a button to add a new block of information about yourself to the document.",
  });
  const handleAboutChange = (e) => {
    setAbout({
      ...about,
      about: e.target.value,
    });
  };
  return isEditable !== "about" ? (
    <div
      className="aboutMe"
      onClick={() => {
        if (viewStatus === "edit") setIsEditable("about");
      }}
    >
      {about.about}
    </div>
  ) : (
    <form
      action=""
      className="aboutMe-form"
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditable(false);
      }}
    >
      <textarea
        name="text"
        rows="5"
        cols="40"
        wrap="soft"
        type="text"
        value={about.about}
        onChange={(e) => handleAboutChange(e)}
      ></textarea>
      <button type="submit">save</button>
    </form>
  );
};

export default AboutMe;
