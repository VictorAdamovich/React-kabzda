import React, {useState} from 'react';


type AccordionPropsType = {
    title: string
}

type AccordionTitlePropsType = {
    title: string
    collapsed:boolean
    setCollapsed:(collapsed:boolean)=>void
}

export function UnControlledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h3>;

}

function AccordionBody() {
    return <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>;

}