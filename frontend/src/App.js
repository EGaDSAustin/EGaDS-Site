import React from "react";
import EGaDSTheme from "./Theme";
import { ThemeProvider } from "@material-ui/styles";
import SiteRouter from "./Routes";

function App() {
    return (
        <ThemeProvider theme={EGaDSTheme}>
            <div className="App">
                <SiteRouter />
            </div>
        </ThemeProvider>
    );
}

export default App;
