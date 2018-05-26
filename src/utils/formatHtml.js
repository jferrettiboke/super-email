import pretty from "pretty";

const formatHtml = html => pretty(html, { ocd: true });

export default formatHtml;
