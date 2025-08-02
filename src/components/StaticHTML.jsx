import { useEffect, useState } from "react";

const StaticHTML = ({ path }) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((data) => setHtml(data));
  }, [path]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default StaticHTML;
