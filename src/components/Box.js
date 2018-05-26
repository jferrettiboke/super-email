import React from "react";
import PropTypes from "prop-types";

import Table from "./Table";
import Tr from "./Tr";
import Td from "./Td";

const Box = ({ style: { padding, ...styles }, children, ...rest }) => (
  <Table data-component="box" style={{ ...styles }} {...rest}>
    <Tr>
      <Td style={{ padding }}>{children}</Td>
    </Tr>
  </Table>
);

Box.propTypes = {
  children: PropTypes.any
};

export default Box;
