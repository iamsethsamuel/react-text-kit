import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Clip from "./animations/clip/Clip";
import Light from "./animations/light/Light";
import Glitch from "./animations/glitch/Glitch";

function App() {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>

                    <Glitch style={{ fontSize: "2em", width: "100%", color: "white", textAlign: "left" }} animate>
                        Edit save to reload.
                    </Glitch>
                </header>
            </div>
        </div>
    );
}

export default App;
