import styled from "styled-components";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";

function App() {
  return (
    <AppDiv>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
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
