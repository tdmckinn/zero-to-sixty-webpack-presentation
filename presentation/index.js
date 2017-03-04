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
import PerformanceSlides from "./performance"
import LoaderSlides from "./loader"

require("normalize.css")
require("spectacle/lib/themes/default/index.css")

const images = {
  webpacklogo: require("../assets/wp-logo-on-dark-bg.png"),
  webpackIconSmall: require("../assets/icon-square-small.png"),
  buildSystems: require("../assets/buildSystems.png"),
  toolbox: require("../assets/toolbox.gif")
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
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="custom"
        progressAction={
          (pointPosition) => {
            const rotateImage = {
              "0": {
                transform: "rotate(0deg)"
              },
              "100": {
                transform: "rotate(360deg)"
              }
            }
            const progressStyle = {
              animation: "progressCustom 0.12s linear 10 alternate both",
              position: "absolute",
              top: -2
            }
            return (
              <div style={[pointPosition, { top: -28 }]}>
                <div style={[progressStyle, rotateImage]}>
                  <img src={images.webpackIconSmall} style={{
                    width: 22,
                    height: 22
                  }}
                  />
                </div>
              </div>
            )
          }
        }
      >
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
          <Heading size={5} textColor="denim" caps>Take Aways</Heading>
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
          <Heading size={5} textColor="secondary">What is webpack?</Heading>
          <Image src={images.webpackIconSmall} width="40px"/>
          <Layout>
              <List>
                <ListItem>Module Bundler</ListItem>
                <ListItem>Static build Tool</ListItem>
                <ListItem>Complexity Handler</ListItem>
                <ListItem>Asset Coordinator</ListItem>
                <ListItem>Not A task Runner</ListItem>
              </List>
            <Fill>
              <div><Image src={images.toolbox} /> </div>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="denim">More on Modules...</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="denim">Dependency Tree</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">Why webpack?</Heading>
            <Image src={images.buildSystems} width="1067px"/>
            <Layout>
              <Fill>
                For
                <div> - small to large app (configure what you need) </div>
                <div> - Using various frontend assets </div>
                <div> - Perfomance configurations </div>
                <div> - Community supoort </div>
                <div> - Modular code explicity state code relationships </div>
              </Fill>
               <Fill>
                 Against
                <div> - extremely small site </div>
                <div> - not familar with build tools </div>
                <div> - No care if code is in global scope </div>
                <div> - Your development team has fully adopted another tool </div>
              </Fill>
            </Layout>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps textColor="denim"><span style={{ color: "#8dd6f9" }}>Getting started: </span> webpack core concepts</Heading>
          <br/>
          <br/>
          <Text textColor="secondary">Entry</Text>
          <Text textColor="secondary">Output</Text>
          <Text textColor="secondary">Loaders</Text>
          <Text textColor="secondary">Plugins</Text>
        </Slide>

        {EntrySlides}

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Output</Heading>

        </Slide>

        {LoaderSlides}

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Plugins</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Advanced</Heading>
          <Text>Tree Shaking</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Debugging</Heading>

        </Slide>

        {PerformanceSlides}

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
