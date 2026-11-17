import katex from "katex";

export function Formula({ tex, display = true }: { tex: string; display?: boolean }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  if (display) return <div className="formula" dangerouslySetInnerHTML={{ __html: html }} />;
  return <span className="formula inline" dangerouslySetInnerHTML={{ __html: html }} />;
}
