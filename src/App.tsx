import { AppBar, Toolbar, Button, CssBaseline, Box } from "@mui/material";
import { styled } from "@mui/system";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PlayGround from "./PlayGround";
import Documentation from "./Documentation";
import About from "./About";

const NavBar = styled(AppBar)({
  backgroundColor: "#1976d2",
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
});

const MainContainer = styled(Box)({
  textAlign: "center",
  marginTop: "64px", // Adjust this value based on the height of the AppBar
  width: "100%", // Ensure the container spans full width
  padding: 0, // Remove padding if necessary
  boxSizing: "border-box", // Include padding and border in the element's total width and height
});

const NavButton = styled(Button)({
  margin: "8px",
  color: "#ffffff",
});

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavButton>Play Ground</NavButton>
            </Link>
            <Link to="/documentation" style={{ textDecoration: "none" }}>
              <NavButton>Documentation</NavButton>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <NavButton>About</NavButton>
            </Link>
          </Box>
        </Toolbar>
      </NavBar>
      <MainContainer>
        <Routes>
          <Route path="/" element={<PlayGround />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainContainer>
    </Router>
  );
}

export default App;
