import styled from "styled-components";

const Home: React.FC<{}> = () => {
  const uploadImage = (): void => {
    console.log(`Uploading image!`);
  }
  
  return (
    <HomeDiv>
      <h1 style={{fontSize: "500%", padding: "1rem"}}>
        starface
      </h1>

      <h2 className="buttonDiv" onClick={uploadImage}>
        Upload Image!
      </h2>
      
      <p style={{fontSize: "1.5em"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </HomeDiv>
  );
}

export default Home;

const HomeDiv = styled.div`
  width: 90%;
  text-align: center;
`