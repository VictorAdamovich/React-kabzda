import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./Raiting/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {SelfAcc} from "./components/SelfAccordion/SelfAcc";
import {SelfRating} from "./SelfRaiting/SelfRating";

function App() {
    return (
        <div className="App">
            {/*<AppTitle title='hello world'/>*/}
            {/*<AppTitle title='hello me'/>*/}
            {/*<SelfRating value={2}/>*/}
            {/*<SelfAcc title={'atitle 1'} collapsed = {true}/>*/}
            {/*<SelfAcc title={'atitle 2'} collapsed = {false}/>*/}
            {/*<SelfRating value={0}/>*/}
            {/*<SelfRating value={1}/>*/}
            {/*<SelfRating value={2}/>*/}
            {/*<SelfRating value={3}/>*/}
            {/*<SelfRating value={4}/>*/}
            {/*<SelfRating value={5}/>*/}
            <OnOff on={false}/>
            <OnOff on={true}/>
            <OnOff on={false}/>
            <SelfAcc title={'acc1'}/>
            <SelfAcc title={'acc2'}/>
            <SelfRating/>
            <SelfRating/>
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
