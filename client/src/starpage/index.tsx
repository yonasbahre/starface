import { useEffect, useContext } from "react";
import Star from "../shared/star";
import { StarContext } from "../App";
import Navbar from "./navbar";
import styled from "styled-components";
import Fact, { FactProps } from "./fact";

const StarPage: React.FC<{}> = () => {
  const { star } = useContext(StarContext);

  return (
    <OuterStarDiv>
      <Navbar />
      <StarDiv>
        <h2 style={{ fontSize: "4em" }}>{star.name}</h2>
        <FactTable>
          <Fact label="Constellation" info={star.constellation} />
          <Fact
            label="Distance From Earth (Light Years)"
            info={star.distance}
          />
          <Fact label="Size (Solar Masses)" info={star.solarMasses} />
          <Fact label="Temperature (K)" info={star.temperature} />
          <Fact label="Fun Fact!" info={star.fact} />
        </FactTable>
      </StarDiv>
    </OuterStarDiv>
  );
};

export default StarPage;

const OuterStarDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

const StarDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const FactTable = styled.div`
  padding-top: 0.5rem;
`;
