import { Helmet } from "react-helmet";
import { DefaultThemes } from "./Themes/DefaultTheme";
import GlobalStyles from "./Components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { HomePage } from "./pages/HomePage";
import { DestinationMars } from "./pages/DestinationMars";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DestinationMoon } from "./pages/DestinationMoon";
import { DestinationEuropa } from "./pages/DesinatonEuropa";
import { DestinationTitan } from "./pages/DestinationTitan";
import CrewDouglas from "./pages/CrewDouglas";
import CrewMark from "./pages/CrewMark";
import CrewVictor from "./pages/CrewVictor";
import CrewAnousheh from "./pages/CrewAnousheh";
import TechnologyVehicle from "./pages/TechnologyVehicle";
import TechnologySpaceport from "./pages/TechnologySpaceport";
import TechnologyCapsule from "./pages/TechnologyCapsule";
// import { Routes, Route, Rounter } from "react-router-dom";
function App() {
  return (
    <Router>
      <ThemeProvider theme={DefaultThemes}>
        <GlobalStyles />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Bellefair&family=Space+Mono:wght@700&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mars" element={<DestinationMars />} />
          <Route path="/moon" element={<DestinationMoon />} />
          <Route path="/europa" element={<DestinationEuropa />} />
          <Route path="/titan" element={<DestinationTitan />} />
          <Route path="/douglas" element={<CrewDouglas />} />
          <Route path="/mark" element={<CrewMark />} />
          <Route path="/victor" element={<CrewVictor />} />
          <Route path="/anousheh" element={<CrewAnousheh />} />
          <Route path="/vehicle" element={<TechnologyVehicle />} />
          <Route path="/spaceport" element={<TechnologySpaceport />} />
          <Route path="/capsule" element={<TechnologyCapsule />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
