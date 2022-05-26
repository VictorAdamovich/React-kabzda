import React from 'react';


type AccordionPropsType = {
    title: string
    collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
}

export function SelfControlledAccardion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>;

}

function AccordionBody() {
    return <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>;

}