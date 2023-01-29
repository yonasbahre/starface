import styled from "styled-components";

const Navbar: React.FC<{}> = () => {
  return (
    <div style={{ width: "100%" }}>
      <SpanStyle>
        <h1>starface</h1>
        <h2>Share!</h2>
      </SpanStyle>
    </div>
  );
};

export default Navbar;

const SpanStyle = styled.span`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  justify-content: space-between;
  padding: 0px 20px;
`;
