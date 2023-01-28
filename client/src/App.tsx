import styled from "styled-components"

function App() {
  return (
    <AppDiv>
      <h1>
        Welcome to Starface
      </h1>
    </AppDiv>
  )
}

// Background URL
const bgUrl: string = `https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg`;

const AppDiv = styled.div`
  h1 {
    font-family: Orbitron, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: cyan;
    margin: 0;
    padding: 10px 0px 0px 0px;
  }
  
  font-family: Josefin Sans, sans-serif;
  background: linear-gradient(150deg, rgba(20, 20, 20, 0.85), rgba(20, 20, 120, 0.85)), url(${bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  min-width: 100vh;
  height: 100%;
  width: 100%;
`

export default App
