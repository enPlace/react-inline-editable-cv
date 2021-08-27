import { useState } from "react";
import Header from "./Components/Header";
import TogglePreview from "./Components/TogglePreview";
import Cv from "./Components/Cv";
import Icon from "./github.svg"
function App() {
  const [viewStatus, setViewStatus] = useState("edit");

  return (
    <div className="App">
      <Header></Header>
      <div className="cvContainer">
        <TogglePreview
          viewStatus={viewStatus}
          setViewStatus={setViewStatus}
        ></TogglePreview>
        <Cv viewStatus={viewStatus}></Cv>
      </div>
      <footer>
        <a id = "copyright" href="https://github.com/enPlace/react-inline-editable-cv" rel= "noreferrer" target = "_blank">
        Copyright © 2021 enPlace
        <img id = "githubIcon" src={Icon} alt="" />
        </a>
      </footer>
    </div>
  );
}

export default App;
