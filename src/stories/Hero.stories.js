import React from "react";

import Hero from "../components/Hero";
import BgHighwayImage from "./assets/bg-highway.jpg";
import BgCarImage from "./assets/bg-car.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Ganhe sua liberdade de ir e vir" image={BgHighwayImage}>
    <p>Um texto qualquer</p>
  </Hero>
);
export const withList = () => (
  <Hero title="Ganhe sua liberdade de ir e vir" image={BgCarImage}>
    <ul>
      <li>Lorem Ipsum is simply dummy text of the printings</li>
      <li>Lorem Ipsum is simply dummy text of the printings</li>
      <li>Lorem Ipsum is simply dummy text of the printings</li>
    </ul>
  </Hero>
);
