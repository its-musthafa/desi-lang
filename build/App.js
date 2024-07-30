import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AppBar, Toolbar, Typography, CssBaseline, Container, Box, Button, } from "@mui/material";
import { styled } from "@mui/system";
const NavBar = styled(AppBar)({
    backgroundColor: "#1976d2", // Customize as needed
});
const ToolbarCenter = styled(Toolbar)({
    justifyContent: "center", // Center the toolbar items horizontally
});
const MainContainer = styled(Container)({
    textAlign: "center",
    marginTop: "32px", // Equivalent to theme.spacing(4)
});
const NavButton = styled(Button)({
    margin: "8px", // Equivalent to theme.spacing(1)
    color: "#ffffff", // Button text color
});
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(CssBaseline, {}), _jsx(NavBar, { position: "static", children: _jsxs(ToolbarCenter, { children: [_jsx(NavButton, { children: "Play Ground" }), _jsx(NavButton, { children: "Documentation" }), _jsx(NavButton, { children: "About" })] }) }), _jsx(MainContainer, { children: _jsx(Box, { children: _jsx(Typography, { variant: "h1", children: "Hello!" }) }) })] }));
}
export default App;
