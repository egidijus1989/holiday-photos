import {Link, useNavigate} from "react-router-dom";
import User from "../user/User";

const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
      <h1>Holiday photos</h1>
        <div className="dropdown">
          <User/>
        </div>
      </div>
    </nav>
  );
};
export default Header;