import React, {useState} from 'react';
import './App.css';
import {UnControlledAccordion} from './components/Accordion/UnControlledAccordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {SelfControlledAccardion} from './components/Accordion/SelfControlledAccordion';
import {UnControllRating} from './components/Rating/UnControllRating';
import {ControlledOnOff} from './components/OnOF/ControlledOnOff';
import {OnOff} from './components/OnOF/OnOF';
import UnControlldeIntup from './components/Input/UnControlldeIntup';
import {ControlldeIntup} from './components/Input/ControlldeIntup';
import {Select} from './components/Select/Select';

export function App() {
    // let [ratingValue, setRaitingValue] = useState<RatingValueType>(0);
    let [collapsed,setCollapsed]=useState<boolean>(false)
    // let [on, setOn] = useState<boolean>(false);
    const onClickCallback=(value:string)=>console.log(value)

    let arr=[
        {title:'Victor',value:1},
        {title:'Pavel',value:2},
        {title:'Bob',value:3},
        {title:'Max',value:4}
    ]

    let [selectValue,setSelectValue]=useState<number>(1)

    const onChangeSelect=(value:number)=>setSelectValue(value)

    return (
        <div>
            <Select
                title={'hello'}
                value={selectValue}
                item={arr}
                onChange={onChangeSelect}
            />
        </div>
    );
}

