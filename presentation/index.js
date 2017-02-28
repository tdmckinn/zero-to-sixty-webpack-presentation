import React from "react"

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Text,
  Fill,
  Link,
  Layout
} from "spectacle"

import preloader from "spectacle/lib/utils/preloader"
import createTheme from "spectacle/lib/themes/default"

import EntrySlides from "./entry"

require("normalize.css")
require("spectacle/lib/themes/default/index.css")

const images = {
  webpacklogo: require("../assets/wp-logo-on-dark-bg.png"),
  webpackIconSmall: require("../assets/icon-square-small.png"),
  buildSystems: require("../assets/buildSystems.png")
}

const thankyouListTextSize = "26px"

preloader(images);

const theme = createTheme({
  primary: "black",
  secondary: "white",
  malibu: "#8dd6f9",
  denim: "#1d78c1"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
})

require("./z60.css")

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="pacman">
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            <Text margin="10px 0 0" textColor="denim" size={1} bold>
              Zero to Sixty with
            </Text>
            <Image src={images.webpacklogo} height="175px"/>
            <Text margin="0 0 0" textColor="denim" size={1} bold>
             Two
            </Text>
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" >
          <BlockQuote>
            <Text textColor="denim">Simple made easy</Text>
            <br />
            <Quote className="intro-quote" textColor="secondary">"Simplicity is hard work. But, there's a huge payoff. The person who has a genuinely simpler system - a system made out of genuinely simple parts,
              is going to be able to affect the greatest change with the least work."</Quote>
            <Cite textColor="malibu">@Rick Hickey </Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="denim" caps>Take Aways</Heading>
          <List>
            <ListItem>Reasons for using webpack</ListItem>
            <ListItem>wepback key principals </ListItem>
            <ListItem>Upgrade path</ListItem>
            <ListItem>Dev / Prod configurations</ListItem>
            <ListItem>Debugging</ListItem>
            <ListItem>Performance</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">What is webpack?</Heading>
          <Image src={images.webpackIconSmall} width="40px"/>
          <List>
            <ListItem>Module Bundler</ListItem>
            <ListItem>Static build Tool</ListItem>
            <ListItem>Dependency Tree</ListItem>
            <ListItem>EVERYTHING IS A MODULE!</ListItem>
            <ListItem>Processes and Optimizes assets</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="denim">More on Modules...</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">Why webpack?</Heading>
            <Image src={images.buildSystems} width="1067px"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps textColor="denim">Getting started: webpack core concepts</Heading>
          <br/>
          <br/>
          <Text textColor="secondary">Entry</Text>
          <Text textColor="secondary">Output</Text>
          <Text textColor="secondary">Loaders</Text>
          <Text textColor="secondary">Plugins</Text>
        </Slide>

        <EntrySlides />

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Output</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Loaders</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Plugins</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Advanced</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Debugging</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Performance</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Base, Dev, Prod, wepback configs</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Resources</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" >
          <Heading size={6} textColor="secondary" caps>Thank you</Heading>
          <Layout >
            <Fill>
              <Text textAlign="left" size={1}> Me: </Text>
              <List className="z60-thankyou">
                <ListItem textSize={thankyouListTextSize}>
                  <Link href="http://tirellmckinnon.com">Tirell Mckinnon</Link>
                </ListItem>
                <ListItem textSize={thankyouListTextSize}>
                  <Link href="https://github.com/tdmckinn">Github: @tdmckinn</Link>
                </ListItem>
                <ListItem textSize={thankyouListTextSize}>
                  <Link href="https://twitter.com/TirellMckinnon">Twitter: @TirellMckinnon</Link>
                </ListItem>
              </List>
            </Fill>
            <Fill>
              <Text textAlign="left">Resources =></Text>
              <List className="z60-thankyou">
                <ListItem textSize={thankyouListTextSize}>
                  <Link href="https://vuejs.org/">Vuejs</Link>
                </ListItem>
                <ListItem textSize={thankyouListTextSize}>
                  <Link href="https://github.com/tdmckinn/zero-to-sixty-webpack-presentation">Presentation</Link>
                </ListItem>
                <ListItem textSize={thankyouListTextSize}>
                  <Link href="https://github.com/tdmckinn/zero-to-sixty-webpack-app">Zero-Sixty Example App</Link>
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    )
  }
}
