import React from "react";
import PropTypes from "prop-types";

const Text = ({ style, ...rest }) => (
  <p
    {...rest}
    style={{
      margin: 0,
      padding: 0,
      ...style
    }}
  />
);

Text.propTypes = {
  children: PropTypes.any.isRequired
};

export default Text;
