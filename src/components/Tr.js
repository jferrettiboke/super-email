import React from "react";

const Tr = ({ style, ...rest }) => (
  <tr
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

export default Tr;
