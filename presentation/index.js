// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
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

// Import custom component
import Interactive from "../assets/interactive";

const images = {
  black: require("../assets/bg-black.jpg"),
  orange: require("../assets/bg-orange.jpg"),
  white1: require("../assets/bg-white-1.jpg"),
  white2: require("../assets/bg-white-2.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
};

preloader(images);

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
const Presentation = () => (
  <Spectacle theme={theme}>
    <Deck transition={["fade", "slide"]} transitionDuration={500}>
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          Spectacle
        </Heading>
        <Heading size={1} fit caps>
          A ReactJS Presentation Library
        </Heading>
        <Heading size={1} fit caps textColor="black">
          Where You Can Write Your Decks In JSX
        </Heading>
        <Link href="https://github.com/FormidableLabs/spectacle">
          <Text bold caps textColor="tertiary">View on Github</Text>
        </Link>
        <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
      </Slide>
      <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
        <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px" />
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Wait what?
        </Heading>
      </Slide>
      <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
        <CodePane
          lang="jsx"
          source={require("raw!../assets/deck.example")}
          margin="20px auto"
        />
      </Slide>
      <Slide transition={["slide"]} bgImage={images.black.replace("/", "")}>
        <Appear fid="1">
          <Heading size={1} caps fit textColor="primary">
            Full Width
          </Heading>
        </Appear>
        <Appear fid="2">
          <Heading size={1} caps fit textColor="tertiary">
            Adjustable Darkness
          </Heading>
        </Appear>
        <Appear fid="3">
          <Heading size={1} caps fit textColor="primary">
            Background Imagery
          </Heading>
        </Appear>
      </Slide>
      <Slide transition={["slide"]} bgImage={images.orange.replace("/", "")}>
        <Appear fid="1">
          <Heading size={1} caps fit textColor="dark-primary">
            Full Width
          </Heading>
        </Appear>
        <Appear fid="2">
          <Heading size={1} caps fit textColor="light-primary">
            Adjustable Darkness
          </Heading>
        </Appear>
        <Appear fid="3">
          <Heading size={1} caps fit textColor="dark-tertiary">
            Background Imagery
          </Heading>
        </Appear>
      </Slide>
      <Slide transition={["slide"]} bgImage={images.white1.replace("/", "")}>
        <Appear fid="1">
          <Heading size={1} caps fit textColor="primary">
            Full Width
          </Heading>
        </Appear>
        <Appear fid="2">
          <Heading size={1} caps fit textColor="dark-tertiary">
            Adjustable Darkness
          </Heading>
        </Appear>
        <Appear fid="3">
          <Heading size={1} caps fit textColor="dark-primary">
            Background Imagery
          </Heading>
        </Appear>
      </Slide>
      <Slide transition={["slide"]} bgImage={images.white2.replace("/", "")}>
        <Appear fid="1">
          <Heading size={1} caps fit textColor="primary">
            Full Width
          </Heading>
        </Appear>
        <Appear fid="2">
          <Heading size={1} caps fit textColor="dark-tertiary">
            Adjustable Darkness
          </Heading>
        </Appear>
        <Appear fid="3">
          <Heading size={1} caps fit textColor="dark-primary">
            Background Imagery
          </Heading>
        </Appear>
      </Slide>
      <Slide transition={["zoom", "fade"]} bgColor="primary">
        <Heading caps fit>Flexible Layouts</Heading>
        <Layout>
          <Fill>
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              Left
            </Heading>
          </Fill>
          <Fill>
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              Right
            </Heading>
          </Fill>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} bgColor="black">
        <BlockQuote>
          <Quote>Wonderfully formatted quotes</Quote>
          <Cite>Ken Wheeler</Cite>
        </BlockQuote>
      </Slide>
      <Slide transition={["spin", "zoom"]} bgColor="tertiary">
        <Heading caps fit size={1} textColor="primary">
          Inline Markdown
        </Heading>
        <Markdown>
          {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
          `}
        </Markdown>
      </Slide>
      <Slide transition={["slide", "spin"]} bgColor="primary">
        <Heading caps fit size={1} textColor="tertiary">
          Smooth
        </Heading>
        <Heading caps fit size={1} textColor="secondary">
          Combinable Transitions
        </Heading>
      </Slide>
      <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <List>
          <Appear><ListItem>Inline style based theme system</ListItem></Appear>
          <Appear><ListItem>Autofit text</ListItem></Appear>
          <Appear><ListItem>Flexbox layout system</ListItem></Appear>
          <Appear><ListItem>React-Router navigation</ListItem></Appear>
          <Appear><ListItem>PDF export</ListItem></Appear>
          <Appear><ListItem>And...</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={["slide"]} bgColor="primary">
        <Heading size={1} caps fit textColor="tertiary">
          Your presentations are interactive
        </Heading>
        <Interactive />
      </Slide>
      <Slide transition={["spin", "slide"]} bgColor="tertiary">
        <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
          Made with love in Seattle by
        </Heading>
        <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo} /></Link>
      </Slide>
    </Deck>
  </Spectacle>
);

export default Presentation;
