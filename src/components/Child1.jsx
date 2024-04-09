import React, { useContext } from "react";
import { titleContext } from "../usecontext";

export default function Child1() {
  const { livein } = useContext(titleContext);

  return <>{livein}</>;
}
