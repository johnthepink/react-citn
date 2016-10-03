// Import React
import React, { PropTypes } from "react";

// Import Spectacle Core tags
import {
  Deck,
  Spectacle,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import {
  theme,
} from "../assets";

const images = {
  black: require("../assets/bg-black.jpg"),
  orange: require("../assets/bg-orange.jpg"),
  white1: require("../assets/bg-white-1.jpg"),
  white2: require("../assets/bg-white-2.jpg"),
};

preloader(images);

const Presentation = ({ slides }) => (
  <Spectacle theme={theme}>
    <Deck transition={["fade", "slide"]} transitionDuration={500}>
      {slides}
    </Deck>
  </Spectacle>
);

Presentation.propTypes = {
  slides: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Presentation;
