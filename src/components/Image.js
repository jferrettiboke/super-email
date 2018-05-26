import React from "react";
import PropTypes from "prop-types";

const Image = ({ style, ...rest }) => (
  <img
    {...rest}
    style={{
      margin: 0,
      padding: 0,
      border: "none",
      ...style
    }}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Image;
