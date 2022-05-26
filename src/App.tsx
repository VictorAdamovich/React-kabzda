import React from 'react';
import './App.css';
import {UnControlledAccordion} from './components/Accordion/UnControlledAccordion';
import {Rating} from './components/Rating/Rating';
import {OnOf} from './components/OnOF';
import {SelfControlledAccardion} from './components/Accordion/SelfControlledAccordion';
import {UnControllRating} from './components/Rating/UnControllRating';

export function App() {
    return (
        <div>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Accordion title={'Accordion 1'} collapsed={true}/>*/}
            {/*<Accordion title={'Accordion 2'} collapsed={false}/>*/}
            {/*<Rating value={3}/>*/}
            <SelfControlledAccardion title={'SelfControlledAccordion1'} collapsed={true}/>
            <SelfControlledAccardion title={'SelfControlledAccordion2'} collapsed={false}/>
            <UnControlledAccordion title={'UnControlledAccordion'}/>
            <Rating value={3}/>
            <UnControllRating/>
            <OnOf/>

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