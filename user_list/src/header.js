import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <h4 className="card-panel red lighten-1 center-align white-text ">
      {props.title}
    </h4>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
