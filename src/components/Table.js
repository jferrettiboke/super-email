import React from "react";

const Table = ({ style, ...rest }) => (
  <table
    {...rest}
    border="0"
    cellPadding="0"
    cellSpacing="0"
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

export default Table;
