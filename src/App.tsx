import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion';
import {Rating} from './components/Rating';

export function App() {
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <Rating value={2}/>
            <Accordion title={'Accordion 1'} collapsed={true}/>
            <Accordion title={'Accordion 2'} collapsed={false}/>
            <Rating value={3}/>
        </div>
    );
}


type PageTitlePropsType={
    title:string
}

function PageTitle(props:PageTitlePropsType) {
    return (
        <div>{props.title}</div>
    );
}