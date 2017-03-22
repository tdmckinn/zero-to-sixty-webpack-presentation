import React from "react"

import {
  SlideSet,
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

const AdvancedSlides = (
  <SlideSet>
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>Advanced</Heading>
      <Text>Code Splitting</Text>
      <Text>Tree Shaking</Text>
      <Text>Debugging</Text>
      <Text>PWA - Offline</Text>
      <Text>Server Side builds</Text>
    </Slide>

    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>Code Splitting</Heading>
    </Slide>

    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>Tree-shaking</Heading>
    </Slide>

    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>Debugging</Heading>
      <iframe src="//giphy.com/embed/53b7Lu6qlgwXC" width="480" height="255" frameBorder="0" className="giphy-embed" allowFullScreen />
    </Slide>

    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>PWA- Offiline</Heading>
    </Slide>

    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>Server Side Builds</Heading>
    </Slide>
  </SlideSet>
)

export default AdvancedSlides
