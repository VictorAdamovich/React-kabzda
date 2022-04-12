import React from 'react';
import './App.css';
import {Accardion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Stars/>
            <Accardion/>
        </div>
    );
}

function AppTitle() {
    return <>hello word</>
}

function Stars() {
    return (<div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>
    )
}



export default App;
