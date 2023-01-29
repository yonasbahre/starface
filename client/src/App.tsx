import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import StarPage from "./starpage";
import Star, {
  defaultStar,
  StarContextType,
  defaultStarContext,
} from "./shared/star";
import React, { useState } from "react";

export const StarContext =
  React.createContext<StarContextType>(defaultStarContext);

function App() {
  const [star, setStar] = useState<Star>(defaultStar);
  const updateStar = (newStar: Star): void => setStar(newStar);

  return (
    <StarContext.Provider value={{ star, updateStar }}>
      <AppDiv>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/star" element={<StarPage />} />
          </Routes>
        </BrowserRouter>
      </AppDiv>
    </StarContext.Provider>
  );
}

// Background URL
const bgUrl: string = `https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg`;

const AppDiv = styled.div`
  h1 {
    font-family: Orbitron, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: cyan;
    margin: 0;
    padding: 10px 0px 0px 0px;
  }

  .buttonDiv {
    background: linear-gradient(
      165deg,
      rgba(20, 20, 80, 1),
      rgba(20, 20, 150, 1)
    );
    border-radius: 15px;
    display: inline-block;
    padding: 10px;
    align-items: center;
    vertical-align: middle;

    :hover {
      background: linear-gradient(
        165deg,
        rgba(20, 20, 80, 1),
        rgba(20, 20, 190, 1)
      );
      cursor: pointer;
    }

    :active {
      background: linear-gradient(
        165deg,
        rgba(20, 20, 80, 1),
        rgba(20, 20, 215, 1)
      );
      text-shadow: cyan 0 0 10px;
    }
  }

  font-family: Josefin Sans, sans-serif;
  background: linear-gradient(
      150deg,
      rgba(20, 20, 20, 0.85),
      rgba(20, 20, 120, 0.85)
    ),
    url(${bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  // min-width: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
