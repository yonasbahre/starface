import { useContext } from "react";
import styled from "styled-components";
import { StarContext } from "../App";

const Navbar: React.FC<{}> = () => {
  const { star } = useContext(StarContext);

  const handleShare = async (): Promise<void> => {
    const url: string = `${import.meta.env.VITE_STARSERV}/star/${
      star.id
    }/poster`;
    window.open(url, "Image");
  };

  return (
    <SpanStyle>
      <h1>starface</h1>
      <ShareStyle onClick={handleShare}>
        <h2>Share!</h2>
      </ShareStyle>
    </SpanStyle>
  );
};

export default Navbar;

const SpanStyle = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

const ShareStyle = styled.div`
  :hover {
    cursor: pointer;
    text-shadow: cyan 0 0 15px;
  }
`;
