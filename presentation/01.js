import React from "react";

import {
  Heading,
  Link,
  Text,
} from "spectacle";

import BGSlide from "../assets/bgSlide";

export default class One extends React.Component {
  render() {
    return (
      <BGSlide image="orange">
        <Heading size={1} fit caps lineHeight={1} textColor="dark-primary">
          React
        </Heading>
        <Heading size={1} fit textColor="dark-tertiary">
          The Beginning of the
        </Heading>
        <Heading size={1} fit textColor="dark-secondary">
          Rest of Your Life(cycle)
        </Heading>
        <Link href="https://github.com/johnthepink/react-citn">
          <Text bold caps textColor="tertiary">View on Github</Text>
        </Link>
      </BGSlide>
    );
  }
}
