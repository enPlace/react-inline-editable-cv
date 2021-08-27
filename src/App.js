import { useState } from "react";
import Header from "./Components/Header";
import TogglePreview from "./Components/TogglePreview";
import Cv from "./Components/Cv";

function App() {
  const [viewStatus, setViewStatus] = useState("edit");

  return (
    <div className="App">
      <Header></Header>
      <TogglePreview
        viewStatus={viewStatus}
        setViewStatus={setViewStatus}
      ></TogglePreview>
      <Cv viewStatus={viewStatus}></Cv>
    </div>
  );
}

export default App;
