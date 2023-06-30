"use client";

import { useState } from "react";
import { InstagramIconCopy } from "@/components";

export function ClientExampleCopy(props) {
  const { title, children } = props;
  const [expanded, setExpanded] = useState(false);

  console.log("render ClientExample");

  function onToggle() {
    setExpanded(!expanded);
  }

  return (
    <div>
      <button onClick={onToggle}>{title}</button>
      {expanded && <div style={{ backgroundColor: "red" }}>{children}</div>}
      {/* <InstagramIconCopy /> */}      
    </div>
  );
}
