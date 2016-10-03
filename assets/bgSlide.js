import React, { PropTypes } from "react";

import { Slide } from "spectacle";

const images = {
  black: require("../assets/bg-black.jpg"),
  orange: require("../assets/bg-orange.jpg"),
  white1: require("../assets/bg-white-1.jpg"),
  white2: require("../assets/bg-white-2.jpg"),
};

export default class BGSlide extends React.Component {

  constructor(props) {
    super(props);
    this.getImage = this.getImage.bind(this);
  }

  getImage() {
    const { image } = this.props;
    if (image && images[image]) {
      return images[image].replace("/", "");
    }
    return images.orange.replace("/", "");
  }

  render() {
    return (
      <Slide transition={[]} bgImage={this.getImage()}>
        {this.props.children}
      </Slide>
    );
  }
}

BGSlide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  image: PropTypes.string,
};
