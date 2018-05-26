import React from "react";
import PropTypes from "prop-types";

import Table from "./Table";
import Tr from "./Tr";

const Row = ({ style, children }) => (
  <Table data-component="row" style={{ display: "table", ...style }}>
    <Tr>{children}</Tr>
  </Table>
);

Row.propTypes = {
  children: PropTypes.any
};

export default Row;
