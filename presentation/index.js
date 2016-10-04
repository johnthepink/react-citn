// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Layout,
  Fill,
  Link,
  List,
  ListItem,
  Slide,
  Spectacle,
  Text,
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

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


const getImage = (image) => {
  if (image && images[image]) {
    return images[image].replace("/", "");
  }
  return images.orange.replace("/", "");
};

const Presentation = () => (
  <Spectacle theme={theme}>
    <Deck transition={["fade", "slide"]} transitionDuration={500}>

      {/* Home */}
      <Slide transition={[]} bgImage={getImage("orange")}>
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
      </Slide>

      {/* What */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={1} fit caps textColor="primary">
          What is React?
        </Heading>
        <List textColor="dark-primary" textFont="secondary">
          <Appear><ListItem>javascript UI building library</ListItem></Appear>
          <Appear><ListItem>just the V in MVC</ListItem></Appear>
          <Appear><ListItem>backend indifferent</ListItem></Appear>
          <Appear><ListItem>virtual DOM</ListItem></Appear>
        </List>
      </Slide>

      {/* Why */}
      <Slide transition={[]} bgImage={getImage("black")}>
        <Heading size={1} fit caps textColor="primary">
          But...Why React?
        </Heading>
        <List textColor="light-primary" textFont="secondary">
          <Appear><ListItem>extremely efficient</ListItem></Appear>
          <Appear><ListItem>very easy to write</ListItem></Appear>
          <Appear><ListItem>declarative components</ListItem></Appear>
          <Appear><ListItem>easy to understand</ListItem></Appear>
          <Appear><ListItem>large ecosystem</ListItem></Appear>
          <Appear><ListItem>facebook backed</ListItem></Appear>
          <Appear><ListItem>amazing dev tools</ListItem></Appear>
          <Appear><ListItem>client render</ListItem></Appear>
        </List>
      </Slide>

      {/* Basic Example */}
      <CodeSlide
        lang="jsx"
        transition={[]}
        code={require("raw!./basic.example")}
        ranges={[
          { loc: [0, 9], title: "Basic Component" },
          { loc: [0, 1], note: "define class" },
          { loc: [1, 2], note: "define render function" },
          { loc: [2, 7], note: "return markup representation" },
        ]}
      />

      {/* SillyButton */}
      <Slide transition={[]} bgImage={getImage("white2")}>
        <Heading size={1} fit caps textColor="primary">
          SillyButton
        </Heading>
        <Layout>
          <Fill>
            <CodePane
              textSize="20"
              lang="jsx"
              source={require("raw!./basic.example")}
            />
          </Fill>
          <Fill
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <button>silly!</button>
            </div>
          </Fill>
        </Layout>
      </Slide>

      {/* JSX */}
      <Slide transition={[]} bgImage={getImage("orange")}>
        <Heading size={1} caps textColor="light-primary">
          JSX
        </Heading>
        <List textColor="dark-primary" textFont="secondary">
          <Appear><ListItem>XML-like syntax in js</ListItem></Appear>
          <Appear><ListItem>makes UI templating really nice</ListItem></Appear>
          <Appear><ListItem>not necessary, but much nicer</ListItem></Appear>
          <Appear><ListItem>representation of how dom will look</ListItem></Appear>
          <Appear><ListItem>it is just javascript</ListItem></Appear>
        </List>
      </Slide>

      {/* ReactDOM example */}
      <CodeSlide
        lang="js"
        transition={[]}
        code={require("raw!./dom.example")}
        ranges={[
          { loc: [0, 10], title: "No JSX" },
          { loc: [3, 4], note: "create <ul>" },
          { loc: [4, 5], note: "create <li>" },
          { loc: [5, 6], note: "create second <li>" },
        ]}
      />

      {/* ReactDOM shorthand */}
      <CodeSlide
        lang="js"
        transition={[]}
        code={require("raw!./dom2.example")}
        ranges={[
          { loc: [0, 10], title: "Shorthand" },
          { loc: [3, 4], note: "create <ul>" },
          { loc: [4, 5], note: "create <li>" },
          { loc: [5, 6], note: "create second <li>" },
        ]}
      />

      {/* JSX version */}
      <CodeSlide
        lang="jsx"
        transition={[]}
        code={require("raw!./dom3.example")}
        ranges={[
          { loc: [0, 10], title: "JSX version" },
          { loc: [3, 7], note: "much happy" },
        ]}
      />

    </Deck>
  </Spectacle>
);

export default Presentation;
