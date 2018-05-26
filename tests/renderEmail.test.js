import React from "react";

import { renderToHtml, Email } from "../src";
import formatHtml from "../src/utils/formatHtml";

test("renders email with title", () => {
  const html = renderToHtml(<Email title="Welcome">Welcome!</Email>);
  expect(formatHtml(html)).toMatchSnapshot();
});

test("renders email with preview", () => {
  const html = renderToHtml(
    <Email title="Welcome" preview="Confirm your email.">
      Welcome!
    </Email>
  );
  expect(formatHtml(html)).toMatchSnapshot();
});
