import React from "react";
import PropTypes from "prop-types";

import Table from "./Table";
import Tr from "./Tr";
import Td from "./Td";

const Container = ({ style, children }) => (
  <Table
    data-component="container"
    style={{
      width: 580,
      maxWidth: 580,
      margin: "0 auto",
      ...style
    }}
  >
    <Tr>
      <Td>{children}</Td>
    </Tr>
  </Table>
);

Container.propTypes = {
  children: PropTypes.any.isRequired
};

export default Container;
