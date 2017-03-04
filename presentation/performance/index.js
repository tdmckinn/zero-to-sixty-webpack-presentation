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

const PerformanceSlides = (
  <SlideSet>
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>Performance</Heading>

    </Slide>
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary">Performance Budgets</Heading>
      <div> Highlighting bundles that exceed 250kb in size </div>
      <Text textColor="secondary"> Simple apps bundle everything into a single file </Text>
      <Text textColor="secondary"> Complex or planning for the future use object entry points </Text>
    </Slide>
  </SlideSet>
)

export default PerformanceSlides
