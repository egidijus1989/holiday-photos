import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithEmailAndPassword } from "../../services/AuthServices";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [user, loading, error] = useAuthState(auth);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setCredentials({
      ...credentials,
      [e.target.name]: value,
    });
    if (
      credentials.email.trim().length !== 0 &&
      credentials.password.trim().length !== 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const submitHandle = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(credentials.email, credentials.password);
    navigate("/");
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/images");
  }, [user, loading]);

  return (
    <>
      <h2 className="mt-3 text-center">Log In</h2>
      <form className="form" onSubmit={submitHandle}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Your email"
            id="email"
            name="email"
            onChange={handleChange}
            value={credentials.email}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="********"
            id="password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="submit" disabled={disabled}>
            Login
          </button>
        </div>
        <div className="mb-3">
          <p>
            Have no account? <Link to={"/register"}>Sign Up</Link>
          </p>
          <p>
            Unable to Log In ? <Link to="/password-reset">Reset Password</Link>{" "}
          </p>
        </div>
      </form>
    </>
  );
};
export default Login;
