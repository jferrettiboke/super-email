import React from "react";
import PropTypes from "prop-types";

import Table from "./Table";
import Tr from "./Tr";
import Td from "./Td";

const Body = ({ children }) => (
  <Table
    data-component="body"
    style={{
      width: "100%",
      height: "100%",
      backgroundColor: "white"
    }}
  >
    <Tr>
      <Td
        align="center"
        valign="top"
        style={{
          wordWrap: "break-word",
          fontSize: 16,
          lineHeight: "1.3",
          color: "#0a0a0a",
          fontWeight: "normal"
        }}
      >
        <center style={{ width: "100%" }}>{children}</center>
      </Td>
    </Tr>
  </Table>
);

Body.propTypes = {
  children: PropTypes.any.isRequired
};

export default Body;
