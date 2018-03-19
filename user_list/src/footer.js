import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
  return <h6 className="card-panel red lighten-1 white-text " id='footer'>
      {props.className}
    </h6>;
};
Footer.propTypes = {
  className: PropTypes.string.isRequired
};

export default Footer;
