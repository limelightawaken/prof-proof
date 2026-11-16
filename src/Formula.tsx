import katex from "katex";

export function Formula({ tex }: { tex: string }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: true,
    strict: "ignore",
  });
  return <div className="formula" dangerouslySetInnerHTML={{ __html: html }} />;
}
