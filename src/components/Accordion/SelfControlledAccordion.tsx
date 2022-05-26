import React from 'react';


type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed:(collapsed:boolean)=>void
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed:(collapsed:boolean)=>void
}

export function SelfControlledAccardion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}  setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={()=>props.setCollapsed(!props.collapsed)}>{props.title}</h3>;

}

function AccordionBody() {
    return <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>;

}