import Icon from "../resume.svg";
const Header = () => {
  return (
    <header className="main-header">
      <img id="main-icon" src={Icon} alt="" />
      <h1 id="page-title">CV Generator</h1>
    </header>
  );
};

export default Header;
