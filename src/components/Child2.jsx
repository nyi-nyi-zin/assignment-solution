import React, { useContext } from "react";
import { titleContext } from "../usecontext";

export default function Child2() {
  const { livein } = useContext(titleContext);
  return <h1>child2-{livein}</h1>;
}
