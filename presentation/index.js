// Import React
import React from "react"

// Import Spectacle Core tags
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
  Text
} from "spectacle"

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
require("normalize.css")
require("spectacle/lib/themes/default/index.css")


const images = {
  webpacklogo: require("../assets/wp-logo-on-dark-bg.png")
}

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
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
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
            <Quote className="intro-quote" textColor="secondary">"Simplicity is hard work. But, there's a huge payoff. The person who has a genuinely simpler system - a system made out of genuinely simple parts,
              is going to be able to affect the greatest change with the least work."</Quote>
            <Cite>@Rick Hickey </Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="denim" caps>Take Aways</Heading>
          <List>
            <ListItem>Reasons for using webpack</ListItem>
            <ListItem>wepback key principals </ListItem>
            <ListItem>Upgrade path</ListItem>
            <ListItem>Dev / Prod configurations</ListItem>
            <ListItem>Performance</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">What is webpack?</Heading>

        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">Why webpack?</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">webpack key principals</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Entry</Heading>

        </Slide>

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
          <Heading size={6} textColor="secondary" caps>Performance</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Base, Dev, Prod, wepback configs</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Resources</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Thank you</Heading>

        </Slide>
      </Deck>
    )
  }
}
