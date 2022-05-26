import React, {useState} from 'react';


type AccordionPropsType = {
    title: string
}

type AccordionTitlePropsType = {
    title: string
}

export function UnControlledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={() => setCollapsed(!collapsed)}>toggle</button>
            {!collapsed && <AccordionBody/>}
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