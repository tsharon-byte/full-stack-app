import React from "react";
import styled from "styled-components";

const StyledSwimLane = styled.div`
  width: 100%;
  height: 50vh;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Poster = styled.div`
  width: 250px;
  height: 375px;
  cursor: pointer;
  background-image: url(${({ src }) => src});
  background-size: cover;

  &:hover {
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 1);
  }
  margin: 10px;
`;
const PostersList = [
  "images/avengers.png",
  "images/bfg.png",
  "images/bladerunner.png",
  "images/fantastic.png",
  "images/ghostbusters.png",
  "images/iceage.png",
  "images/avengers.png",
];

export const SwimLane = () => {
  return (
    <StyledSwimLane>
      {PostersList.map((item) => (
        <Poster key={item} src={item} />
      ))}
    </StyledSwimLane>
  );
};
