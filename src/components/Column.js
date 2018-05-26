import React from "react";
import PropTypes from "prop-types";

import Td from "./Td";

const widths = {
  "1": `${1 * 100 / 12}%`,
  "2": `${2 * 100 / 12}%`,
  "3": `${3 * 100 / 12}%`,
  "4": `${4 * 100 / 12}%`,
  "5": `${5 * 100 / 12}%`,
  "6": `${6 * 100 / 12}%`,
  "7": `${7 * 100 / 12}%`,
  "8": `${8 * 100 / 12}%`,
  "9": `${9 * 100 / 12}%`,
  "10": `${10 * 100 / 12}%`,
  "11": `${11 * 100 / 12}%`,
  "12": `${12 * 100 / 12}%`
};

const Column = ({ width, style, ...rest }) => (
  <Td
    data-component="column"
    style={{
      width: widths[width.toString()],
      marginTop: 0,
      marginBottom: 0,
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 15,
      paddingRight: 15,
      ...style
    }}
    {...rest}
  />
);

Column.defaultProps = {
  width: 12
};

Column.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.any
};

export default Column;
