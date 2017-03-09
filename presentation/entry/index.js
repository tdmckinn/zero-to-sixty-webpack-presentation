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

import preloader from "spectacle/lib/utils/preloader"

const images = {
  entryex: require("../../assets/entry-ex.png")
}

preloader(images);

const EntrySlides = (
  <SlideSet>
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>Entry</Heading>
    </Slide>

    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Image src={images.entryex} style={{ maxHeight: 695 }} />
    </Slide>

    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>Dependency Graph</Heading>
    </Slide>
  </SlideSet>
)

export default EntrySlides
