import React, {useState} from "react";

type accordionPropsType = {
    title: string
}


export function SelfAcc(props: accordionPropsType) {
    let [collapsed, setCollapsed] = useState(false);

    return (<div>
            <AccordionTitle titleValue={props.title}/>
            <button onClick={() => setCollapsed(!collapsed)}>toggle</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    titleValue: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.titleValue}</h3>
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
