// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  Layout,
  Fill,
  Link,
  List,
  ListItem,
  S,
  Slide,
  Spectacle,
  Text,
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import Terminal from "../assets/terminal";

import {
  theme,
} from "../assets";

import ClassExample from "./class";
import StatelessExample from "./stateless";
import CrazyForm from "./props";
import StateExample from "./state";
import EventExample from "./event";
import StyleExample from "./style";
import LifecycleExample from "./lifecycle";

const images = {
  black: require("../assets/bg-black.jpg"),
  orange: require("../assets/bg-orange.jpg"),
  white1: require("../assets/bg-white-1.jpg"),
  white2: require("../assets/bg-white-2.jpg"),
  nope: require("../assets/nope.gif"),
  react: require("../assets/react.png"),
  magic: require("../assets/magic.gif"),
  app: require("../assets/app.png"),
  cra: require("../assets/cra.png"),
  turtle: require("../assets/turtle.gif"),
  thanks: require("../assets/thanks.gif"),
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
        <Heading size={1} fit caps lineHeight={1} textColor="light-primary">
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
        <Image src={getImage("react")} height={200} />
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

      {/* gif pause */}
      <Slide transition={[]} bgImage={getImage("magic")} />

      {/* Just JS */}
      <CodeSlide
        lang="jsx"
        transition={[]}
        code={require("raw!./dom4.example")}
        ranges={[
          { loc: [0, 10], title: "Just JS" },
          { loc: [3, 7], note: "make the js" },
        ]}
      />

      {/* Components */}
      <Slide transition={[]} bgImage={getImage("orange")}>
        <Heading size={1} caps textColor="light-primary">
          Components
        </Heading>
        <List textColor="dark-primary" textFont="secondary">
          <Appear><ListItem>2 types of components</ListItem></Appear>
          <List textColor="dark-primary" textFont="secondary" style={{ marginLeft: "40" }}>
            <Appear><ListItem>classes</ListItem></Appear>
            <Appear><ListItem>stateless</ListItem></Appear>
          </List>
          <Appear><ListItem>contains everything in one place</ListItem></Appear>
          <List textColor="dark-primary" textFont="secondary" style={{ marginLeft: "40" }}>
            <Appear><ListItem>markup</ListItem></Appear>
            <Appear><ListItem>css</ListItem></Appear>
            <Appear><ListItem>state</ListItem></Appear>
            <Appear><ListItem>data fetch</ListItem></Appear>
            <Appear><ListItem>js</ListItem></Appear>
          </List>
        </List>
      </Slide>

      {/* Simple ES6 Class */}
      <Slide transition={[]} bgImage={getImage("white2")}>
        <Heading size={1} fit caps textColor="primary">
          Simple Class
        </Heading>
        <Layout>
          <Fill>
            <CodePane
              textSize="20"
              lang="jsx"
              source={require("raw!./class.example")}
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
              <ClassExample />
            </div>
          </Fill>
        </Layout>
      </Slide>

      {/* Stateless function */}
      <Slide transition={[]} bgImage={getImage("white2")}>
        <Heading size={1} fit caps textColor="primary">
          Stateless Function
        </Heading>
        <Layout>
          <Fill>
            <CodePane
              textSize="20"
              lang="jsx"
              source={require("raw!./stateless.example")}
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
              <StatelessExample />
            </div>
          </Fill>
        </Layout>
      </Slide>

      {/* Props slide */}
      <Slide transition={[]} bgImage={getImage("black")}>
        <Heading size={1} fit caps textColor="primary">
          Props
        </Heading>
        <List textColor="light-primary" textFont="secondary">
          <Appear><ListItem>way to pass information to a component</ListItem></Appear>
          <Appear><ListItem>one direction: flows top down</ListItem></Appear>
          <Appear><ListItem>makes resuability very simple</ListItem></Appear>
          <Appear><ListItem>abstracts away internals of component</ListItem></Appear>
        </List>
      </Slide>

      {/* Props (override text) */}
      <Slide transition={[]} bgImage={getImage("white2")}>
        <Layout>
          <Fill>
            <CodePane
              textSize="20"
              lang="jsx"
              source={require("raw!./props.example")}
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
              <CrazyForm />
            </div>
          </Fill>
        </Layout>
      </Slide>

      {/* State slide */}
      <Slide transition={[]} bgImage={getImage("orange")}>
        <Heading size={1} fit caps textColor="dark-primary">
          State
        </Heading>
        <List textColor="light-primary" textFont="secondary">
          <Appear><ListItem>manage internal state of your component</ListItem></Appear>
          <Appear><ListItem>good for handling UI state</ListItem></Appear>
        </List>
      </Slide>

      {/* State (active) */}
      <Slide transition={[]} bgImage={getImage("white2")}>
        <Layout>
          <Fill>
            <CodePane
              textSize="20"
              lang="jsx"
              source={require("raw!./state.example")}
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
              <StateExample />
            </div>
          </Fill>
        </Layout>
      </Slide>

      {/* DOM event slide */}
      <Slide transition={[]} bgImage={getImage("black")}>
        <Heading size={1} fit caps textColor="primary">
          DOM Events
        </Heading>
        <List textColor="light-primary" textFont="secondary">
          <Appear><ListItem>abstracts browser events to simple API</ListItem></Appear>
          <Appear><ListItem>events for everything</ListItem></Appear>
          <List textColor="light-primary" textFont="secondary" style={{ marginLeft: "40" }}>
            <Appear><ListItem>onClick</ListItem></Appear>
            <Appear><ListItem>onKeyPress</ListItem></Appear>
            <Appear><ListItem>onChange</ListItem></Appear>
            <Appear><ListItem>so many more</ListItem></Appear>
          </List>
        </List>
      </Slide>

      {/* DOM events (onClick) */}
      <Slide transition={[]} bgImage={getImage("white2")}>
        <Layout>
          <Fill>
            <CodePane
              textSize="20"
              lang="jsx"
              source={require("raw!./event.example")}
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
              <EventExample />
            </div>
          </Fill>
        </Layout>
      </Slide>

      {/* Add style based on state */}
      <Slide transition={[]} bgImage={getImage("white2")}>
        <Layout>
          <Fill>
            <CodePane
              textSize="18"
              lang="jsx"
              source={require("raw!./style.example")}
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
              <StyleExample />
            </div>
          </Fill>
        </Layout>
      </Slide>

      {/* Lifecycle functions */}
      <Slide transition={[]} bgImage={getImage("orange")}>
        <Heading size={1} fit caps textColor="light-primary">
          Lifecycle Functions
        </Heading>
        <List textColor="dark-primary" textFont="secondary">
          <Appear><ListItem>manage life of your component</ListItem></Appear>
          <List textColor="dark-primary" textFont="secondary" style={{ marginLeft: "40" }}>
            <Appear><ListItem>componentWillMount</ListItem></Appear>
            <Appear><ListItem>componentDidMount</ListItem></Appear>
            <Appear><ListItem>componentWillUnmount</ListItem></Appear>
            <Appear><ListItem>componentWillUpdate</ListItem></Appear>
            <Appear><ListItem>and more...</ListItem></Appear>
          </List>
        </List>
      </Slide>

      {/* Lifecycle functions (willmount) */}
      <Slide transition={[]} bgImage={getImage("white2")}>
        <Layout>
          <Fill>
            <CodePane
              textSize="20"
              lang="jsx"
              source={require("raw!./lifecycle.example")}
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
              <LifecycleExample />
            </div>
          </Fill>
        </Layout>
      </Slide>

      {/* gif pause */}
      <Slide transition={[]} bgImage={getImage("nope")} bgDarken={0.5}>
        <Heading size={1} fit caps textColor="light-primary">
          But I don&#39;t
        </Heading>
        <Heading size={1} fit caps textColor="light-primary">
          want to rewrite
        </Heading>
        <Heading size={1} fit caps textColor="light-primary">
          everything
        </Heading>
      </Slide>

      {/* Incrementally adoptable */}
      <Slide transition={[]} bgImage={getImage("black")}>
        <Heading size={1} fit caps textColor="primary">
          Good news
        </Heading>
        <List textColor="light-primary" textFont="secondary">
          <Appear><ListItem>incrementally adoptable</ListItem></Appear>
          <Appear><ListItem>use it for new things</ListItem></Appear>
          <Appear><ListItem>drop on any existing page</ListItem></Appear>
          <Appear><ListItem>talk to your existing backend</ListItem></Appear>
        </List>
      </Slide>

      {/* Our app */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading size={1} fit caps textColor="primary">
          NewSpring App
        </Heading>
        <Layout>
          <Fill>
            <Image src={getImage("app")} width="400" />
          </Fill>
          <Fill
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <List textColor="dark-primary" textFont="secondary">
                <Appear><ListItem>React</ListItem></Appear>
                <Appear><ListItem>Meteor/Cordova</ListItem></Appear>
                <Appear><ListItem>shared code</ListItem></Appear>
                <Appear><ListItem>open source&nbsp;
                  <Link textColor="primary" href="https://github.com/newspring/holtzmann">
                    <S type="underline" underline>(link)</S>
                  </Link>
                </ListItem></Appear>
                <Appear><ListItem>steal it</ListItem></Appear>
              </List>
            </div>
          </Fill>
        </Layout>
      </Slide>

      {/* Getting Started */}
      <Slide transition={[]} bgImage={getImage("black")}>
        <Heading size={1} fit caps textColor="primary">
          Getting started
        </Heading>
        <Terminal>
          <p className="font">$ npm install -g create-react-app</p>

          <p className="font">
            $ create-react-app my-app<br />
            $ cd my-app/<br />
            $ npm start
          </p>

          <p className="font" style={{ color: "green" }}>
            Compiled Successfully!
          </p>
          <p className="font">
            App running at http://localhost:3000
          </p>
        </Terminal>
      </Slide>

      {/* App preview */}
      <Slide transition={[]} bgImage={getImage("orange")}>
        <Image src={getImage("cra")} height={500} />
      </Slide>

      {/* gif break */}
      <Slide transition={[]} bgImage={getImage("turtle")}>
        <Heading size={1} fit caps textColor="light-primary">
          Show Me Cool
        </Heading>
        <Heading size={1} fit caps textColor="light-primary">
          Things!
        </Heading>
      </Slide>

      {/* Cool things */}
      <Slide transition={[]} bgImage={getImage("orange")}>
        <Heading size={1} fit caps textColor="light-primary">
          Cool things
        </Heading>
        <List textColor="dark-primary" textFont="secondary">
          <Appear><ListItem>
            <Link href="https://facebook.github.io/react-native/">
              <S type="underline">React Native</S>
            </Link>
          </ListItem></Appear>
          <Appear><ListItem>
            <Link href="https://github.com/FormidableLabs/react-music">
              <S type="underline">React Music</S>
            </Link>
          </ListItem></Appear>
          <Appear><ListItem>
            <Link href="https://github.com/FormidableLabs/react-game-kit">
              <S type="underline">React Games</S>
            </Link>
          </ListItem></Appear>
          <Appear><ListItem>
            <Link href="https://github.com/iamdustan/react-hardware">
              <S type="underline">React Hardware</S>
            </Link>
          </ListItem></Appear>
          <Appear><ListItem>
            <Link href="https://twitter.com/reactjs/status/784088700460204032">
              <S type="underline">React VR</S>
            </Link>
          </ListItem></Appear>
          <Appear><ListItem>
            <Link href="https://formidable.com/open-source/spectacle/">
              <S type="underline">This presentation</S>
            </Link>
          </ListItem></Appear>
          <Appear><ListItem>
            <Link href="https://js.coach/">
              <S type="underline">so. many. plugins.</S>
            </Link>
          </ListItem></Appear>
        </List>
      </Slide>

      {/* thanks */}
      <Slide transition={[]} bgImage={getImage("thanks")} bgDarken={0.3}>
        <Heading size={1} fit caps textColor="light-primary">
          I&#39;m Out
        </Heading>
        <Heading size={3} textColor="light-primary">
          <Link textColor="primary" href="https://twitter.com/johnthepink">
            @johnthepink
          </Link>
        </Heading>
        <Heading size={3} textColor="light-primary">
          <Link textColor="primary" href="http://react-citn.surge.sh/">
            react-citn.surge.sh
          </Link>
        </Heading>
      </Slide>

    </Deck>
  </Spectacle>
);

export default Presentation;
