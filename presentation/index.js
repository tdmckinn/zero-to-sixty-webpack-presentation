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
  Layout,
  Markdown
} from "spectacle"

import preloader from "spectacle/lib/utils/preloader"
import createTheme from "spectacle/lib/themes/default"
import styled, { keyframes } from "styled-components"

import EntrySlides from "./entry"
import LoaderSlides from "./loaders"
import OutputSlides from "./output"
import PluginsSlides from "./plugins"
import PerformanceSlides from "./performance"
import AdvancedSlides from "./advanced"
import upgrade from "./upgrade.md"

require("normalize.css")
require("spectacle/lib/themes/default/index.css")
require("./z60.css")

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

const customProgressMarkup = (pointPosition) => {
  const rotate360 = keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `
  const Rotate = styled.div`
    animation: ${rotate360} 1s ease-in-out 0.2s;
  `
  const progressStyle = {
    position: "absolute",
    transition: "left 0.3s ease-in-out 0.2s",
    transform: "translate(-5px, -5px)"
  }
  return (
    <div style={[progressStyle, pointPosition, { top: -31 }]}>
      <Rotate>
        <img src={images.webpackIconSmall} style={{
          width: 20,
          height: 20
        }}
        />
      </Rotate>
    </div>
  )
}
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="custom"
        progressAction={customProgressMarkup}
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
            <ListItem>Environment configurations</ListItem>
            <ListItem>Debugging</ListItem>
            <ListItem>Performance</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary">What is webpack?</Heading>
          <Image src={images.webpackIconSmall} width="40px"/>
          <Text textColor="malibu">webpack is a module bundler</Text>
          <Layout>
              <ul className="webpack-what-list">
                <li>Static build Tool</li>
                <li>Complexity Handler</li>
                <li>Asset Coordinator</li>
                <li className="strike">Task Runner</li>
              </ul>
            <Fill>
              <div><Image src={images.toolbox} /> </div>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="denim">More on Modules...</Heading>
          <br/>
          <Text textColor="secondary">* Encapsulation</Text>
          <Text textColor="secondary">* Allow for better Maintainability</Text>
          <Text textColor="secondary">* Namespaced</Text>
          <Text textColor="secondary">* Code Reuse</Text>
          <Text textColor="secondary">* (CommonJS):Sync| (AMD):Async</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="denim">Why webpack?</Heading>
            <Image src={images.buildSystems} width="1067px"/>
            <Layout>
              <Fill>
                <Text textColor="denim">For</Text>
                <div> - small to large app (configure what you need) </div>
                <div> - Using various frontend assets </div>
                <div> - Perfomance configurations </div>
                <div> - Community supoort </div>
                <div> - Modular code explicity state code relationships </div>
              </Fill>
               <Fill>
                 <Text textColor="denim">Against</Text>
                <div> - extremely small site </div>
                <div> - not familar with build tools </div>
                <div> - No care if code is in global scope </div>
                <div> - Your development team has fully adopted another tool </div>
              </Fill>
            </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <div id="upgrade-md" className="upgrade-md">
            <Markdown>
            {upgrade}
            </Markdown>
          </div>
        </Slide>
        <Slide>
          <iframe src="//giphy.com/embed/Um3ljJl8jrnHy" width="480" height="315" frameBorder="0" className="giphy-embed" allowFullScreen />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps textColor="denim"><span style={{ color: "#8dd6f9" }}>Getting started: </span> webpack core concepts</Heading>
          <br/>
          <Text textColor="secondary">Entry</Text>
          <Text textColor="secondary">Output</Text>
          <Text textColor="secondary">Loaders</Text>
          <Text textColor="secondary">Plugins</Text>
        </Slide>

        {EntrySlides}

        {OutputSlides}

        {LoaderSlides}

        {AdvancedSlides}

        {PluginsSlides}

        {PerformanceSlides}

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Configurations</Heading>
           <Layout>
            <Fill>
              <Text>Base, Dev, Prod: wepback configs</Text>
              <Text>webpack merge is your friend</Text>
            </Fill>
            <Fill>
              <iframe src="//giphy.com/embed/Awsnv6t6Hv572" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" >
          <Heading size={6} textColor="secondary" caps>Documentation</Heading>

        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" >
          <Heading size={6} textColor="secondary" caps>Conclusion</Heading>
            <List>
              <ListItem textSize={thankyouListTextSize}>
                webpack can be simple, complexity comes with application growth
              </ListItem>
              <ListItem textSize={thankyouListTextSize}>
                Learn various features by expirimenting
              </ListItem>
              <ListItem textSize={thankyouListTextSize}>
                Stable Production builds
              </ListItem>
              <ListItem textSize={thankyouListTextSize}>
                Check out the docs
              </ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" >
          <Heading size={6} textColor="secondary" caps>Thank you</Heading>
          <Layout>
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
