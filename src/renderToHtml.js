import { renderToStaticMarkup } from "react-dom/server";
import inlineStyles from "./utils/inlineStyles";

const renderToHtml = element =>
  inlineStyles(`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
${renderToStaticMarkup(element)}
`);

export default renderToHtml;
