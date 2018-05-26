import React from "react";

const Td = ({ style, ...rest }) => (
  <td
    {...rest}
    style={{
      margin: 0,
      padding: 0,
      border: "none",
      borderSpacing: 0,
      borderCollapse: "collapse",
      verticalAlign: "top",
      width: "100%",
      ...style
    }}
  />
);

export default Td;
