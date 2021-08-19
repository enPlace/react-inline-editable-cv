import Icon from "../cvicon.jpeg"
const Header = () => {
    return ( 
        <header class = "main-header">
        <h1 id ="page-title">CV Generator</h1>
        <img id = "main-icon" src={Icon} alt="" />
      </header>
     );
}
 
export default Header;