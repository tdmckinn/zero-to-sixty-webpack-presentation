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
      <Text>Tree Shaking</Text>
    </Slide>

    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>Debugging</Heading>
      <iframe src="//giphy.com/embed/53b7Lu6qlgwXC" width="480" height="255" frameBorder="0" className="giphy-embed" allowFullScreen />
    </Slide>
  </SlideSet>
)

export default AdvancedSlides
