import { Link, useNavigate } from "react-router-dom";
import User from "../user/User";

const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Holyday Photos
        </Link>
        <Link to="/imageLayout" className="navbar-brand">
          Your Photos
        </Link>
        <User />
      </div>
    </nav>
  );
};
export default Header;
