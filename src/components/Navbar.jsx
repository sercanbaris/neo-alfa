import "../css/navbar.css";
import logo from "../media/logo.png";

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <img className="logo" src={logo} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
