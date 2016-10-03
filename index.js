import React from "react";
import { render } from "react-dom";

import Presentation from "./presentation";

import One from "./presentation/01";

const slides = [
  <One transition={[]} key={1} />,
];

render(<Presentation slides={slides} />, document.getElementById("root"));
