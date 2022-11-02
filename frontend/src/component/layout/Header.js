import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";

import "./header.css";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  function logoutUser(e) {
    e.preventDefault();
    dispatch(logout());
    alert("Logout Successfully");
  }
  return (
    <div className="main">
      <nav className="navbar navbar-light bg-dark justify-content-between">
        <Link to="/" className="navbar-brand mx-2">
          FreeCode<span>BootCamp</span>{" "}
        </Link>
        <form className="form-inline">
          <button
            className="btn btn-outline-success my-2 my-sm-0 mx-2"
            type="submit"
          >
            Menu
          </button>
          {isAuthenticated ? (
            <button
              className="btn btn-outline-success my-2 my-sm-0 mx-2 color-a"
              type="submit"
              onClick={logoutUser}
            >
              <Link to="/">LogOut</Link>
            </button>
          ) : (
            <button
              className="btn btn-outline-success my-2 my-sm-0 mx-2 color-a"
              type="submit"
            >
              <Link to="/login">Sing Up</Link>
            </button>
          )}
        </form>
      </nav>
    </div>
  );
};

export default Header;
