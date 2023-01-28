import styled from "styled-components"

function App() {
  return (
    <AppDiv>
      Welcome to Starface
    </AppDiv>
  )
}

const AppDiv = styled.div`
  font-family: Orbitron, sans-serif;
  background: linear-gradient(150deg, rgb(20, 20, 20), rgb(20, 20, 120));
  color: white;
  height: 100vh;
`

export default App
