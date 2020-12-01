import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <i className={props.icon}></i> {props.title}
          </Link>
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
