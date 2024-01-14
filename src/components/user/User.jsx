import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import * as userServices from "../../services/UserServices";
import { auth, logout } from "../../services/AuthServices";

const User = () => {
  const [userData, setUserData] = useState({});
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/");
    userServices.getUserData(user, setUserData);
  }, [user, loading]);
  return (
    <>
      {user && (
        <div className="dropdown" role="button">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {userData.name}
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">{userData.email}</li>
            <li className="dropdown-item" onClick={logout}>
              Atsijungti
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default User;
