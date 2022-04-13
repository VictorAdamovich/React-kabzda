import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./Raiting/Rating";

function App() {
    return (
        <div className="App">
            {/*<AppTitle title='hello world'/>*/}
            {/*<AppTitle title='hello me'/>*/}
            {/*<Rating value={2}/>*/}
            <Accordion title={'atitle 1'} collapsed = {true}/>
            <Accordion title={'atitle 2'} collapsed = {false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type pageTitlePropsType = {
    title: string
}

function AppTitle(props: pageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
