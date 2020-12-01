import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="#" className="navbar-brand">
            <i className={props.icon}></i> {props.title}
          </a>
        </div>
      </nav>
    </div>
  );
};

Navbar.defaultProp = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
