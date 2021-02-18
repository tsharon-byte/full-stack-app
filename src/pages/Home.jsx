import React from "react";
import styled from "styled-components";

import { HeroCarousel, SwimLane } from "../components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  console.log(window.location.pathname);
  return (
    <HomeContainer>
      <HeroCarousel />
      <SwimLane />
    </HomeContainer>
  );
};
export default Home;
