import React from "react";

import { renderToHtml, Email, Container, Row, Column } from "../src";
import formatHtml from "../src/utils/formatHtml";

test("renders successfully", () => {
  const html = renderToHtml(
    <Email title="Welcome">
      <Container>
        <Row>
          <Column width="6">Column 1</Column>
          <Column width="6">Column 2</Column>
        </Row>
      </Container>
    </Email>
  );
  expect(formatHtml(html)).toMatchSnapshot();
});
