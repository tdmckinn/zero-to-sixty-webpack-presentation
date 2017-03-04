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
  loader: require("../../assets/loadersmain.png"),
  loaderJson: require("../../assets/json-loader.png")
}

preloader(images)

const LoaderSlides = (
  <SlideSet>
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>Loaders</Heading>
      <Text> Simple wrappers for compilers </Text>
      <Image src={images.loader} />
    </Slide>
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Text textColor="secondary">JSON Loader</Text>
      <Image src={images.loaderJson} />
    </Slide>
  </SlideSet>
)

export default LoaderSlides
