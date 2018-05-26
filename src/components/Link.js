import React from "react";
import PropTypes from "prop-types";

const Link = ({ style, ...rest }) => (
  <a
    {...rest}
    target="_blank"
    style={{
      margin: 0,
      padding: 0,
      display: "inline-block",
      ...style
    }}
  />
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default Link;
