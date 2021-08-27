import { useState } from "react";
const AboutMe = ({ isEditable, setIsEditable }) => {
  const [about, setAbout] = useState({
    about: "about me",
  });
  const handleAboutChange = (e) => {
    setAbout({
      ...about,
      about: e.target.value,
    });
  };
  return isEditable !== "about" ? (
    <div
    className = "aboutMe"
    onClick = {()=>setIsEditable("about")}
    >{about.about}</div>
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
        rows="8"
        cols="45"
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
