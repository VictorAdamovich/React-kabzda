import React, {useState} from 'react';
import './App.css';
import {UnControlledAccordion} from './components/Accordion/UnControlledAccordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {SelfControlledAccardion} from './components/Accordion/SelfControlledAccordion';
import {UnControllRating} from './components/Rating/UnControllRating';
import {ControlledOnOff} from './components/OnOF/ControlledOnOff';
import {OnOff} from './components/OnOF/OnOF';

export function App() {
    let [ratingValue, setRaitingValue] = useState<RatingValueType>(0);
    let [collapsed,setCollapsed]=useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false);

    return (
        <div>
            <SelfControlledAccardion title={'SelfControlledAccordion1'} collapsed={collapsed} setCollapsed={setCollapsed}/>
            ---
            <UnControlledAccordion title={'UnControlledAccordion'}/>
            ---
            <Rating value={ratingValue} onClick={setRaitingValue}/>
            ---
            <UnControllRating/>
            ---
            <OnOff onChange={setOn}/>
            <ControlledOnOff on={on} setOn={setOn}/>


        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <div>{props.title}</div>
    );
}