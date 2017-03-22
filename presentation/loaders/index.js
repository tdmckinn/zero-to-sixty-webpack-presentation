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
  loaderJson: require("../../assets/json-loader.png"),
  baeblLoader: require("../../assets/babel-loader-ex.png")
}

preloader(images)

const LoaderSlides = (
  <SlideSet>
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>Loaders</Heading>
      <br/>
      <Text textColor="secondary"> Loaders are transformations that are applied on a resource file of your application. They are functions (running in Node.js) that take the source of a resource file as the parameter and return the new source. </Text>
      <Text textColor="secondary"> Some cases wrappers for compilers </Text>
    </Slide>

    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Text textColor="secondary">Loader Syntax</Text>
      <br/>
      <Text textColor="secondary"><b>rules </b></Text>
      <Text textColor="secondary"><b>test /\.ts$/ - Match files against RegExp accepts function as well </b></Text>
      <Text textColor="secondary"><b>include </b></Text>
      <Text textColor="secondary"><b>exclude </b></Text>
      <Text textColor="secondary"><b>use - loader to use matched files with the above criteria</b></Text>
      <Text textColor="secondary"> Loaders used top bottom and right to left</Text>
    </Slide>

    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Text textColor="secondary">Loader Ex.</Text>
      <Image src={images.loader} style={{ maxWidth: "100%" }} />
    </Slide>

    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Text textColor="secondary">JSON Loader</Text>
      <Image src={images.loaderJson} style={{ maxWidth: "100%" }} />
    </Slide>
    
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Text textColor="secondary">Babel Loader Ex.</Text>
      <Image src={images.baeblLoader} style={{ maxWidth: "100%" }} />
    </Slide>
  </SlideSet>
)

export default LoaderSlides
