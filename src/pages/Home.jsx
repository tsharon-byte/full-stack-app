import React from "react";
import { HeroCarousel } from "../components";
const Home = () => {
  console.log(window.location.pathname);
  return (
    <>
      <HeroCarousel />
    </>
  );
};
export default Home;
