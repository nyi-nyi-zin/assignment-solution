import React, { useContext } from "react";
import { titleContext } from "../usecontext";

export default function Child3() {
  const { username } = useContext(titleContext);
  return <h1>child3-{username}</h1>;
}
