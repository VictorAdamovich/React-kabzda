import React, {useState} from 'react';
import './App.css';
import {ReactMemo} from './components/MemoTest/ReactMemo';
import RatingNoMemo from './components/Rating/Rating';

export function App() {
    // // let [ratingValue, setRaitingValue] = useState<RatingValueType>(0);
    // let [collapsed,setCollapsed]=useState<boolean>(false)
    // // let [on, setOn] = useState<boolean>(false);
    // const onClickCallback=(value:string)=>console.log(value)

    let arr = [
        {title: 'Minsk', value: 1},
        {title: 'Moscow', value: 2},
        {title: 'Brest', value: 3},
        {title: 'Grodno', value: 4},
    ];

    let [selectValue, setSelectValue] = useState<number>(2);

    const onChangeSelect = (value: number) => setSelectValue(value);
    const selectTitle = ' hello';

    return (
        <>
        </>
    );
}

