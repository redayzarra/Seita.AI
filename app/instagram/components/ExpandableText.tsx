"use client";

import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const ExpandableText = ({ children, maxChars }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= maxChars) return <p>{children}</p>;

  const summary = expanded ? children : children.substring(0, maxChars) + "...";

  return (
    <p>
      {summary}
      <button
        className="btn btn-xs btn-ghost"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </p>
  );
};

export default ExpandableText;
