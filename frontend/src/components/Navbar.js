import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({ loginUser }) => {
  return (
    <nav className="navbar-container">
      <Link to="/" className="link">
        <h4>EventManagement App</h4>
      </Link>
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/sessions" className="link">
            Sessions
          </Link>
        </li>
        {loginUser ? (
          <li>User</li>
        ) : (
          <>
            <li>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
