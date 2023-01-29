import styled from "styled-components";

export type FactProps = {
  label: string;
  info: string | number;
};

const Fact: React.FC<FactProps> = (props) => {
  return (
    <FactDiv>
      {props.label}
      <h4 style={{ fontSize: "1.5em", paddingTop: 1 }}>{props.info}</h4>
    </FactDiv>
  );
};

const FactDiv = styled.div`
  padding: 0.6rem;
`;

export default Fact;
