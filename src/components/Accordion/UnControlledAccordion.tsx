import React, {useReducer, useState} from 'react';


type AccordionPropsType = {
    title: string
}

type AccordionTitlePropsType = {
    title: string
    collapsed:boolean
    setCollapsed:(collapsed:boolean)=>void
}

type ActionType= ReturnType<typeof collapsedAC>

const reducer=(state:boolean,action:ActionType)=>{
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':{}
            return !state
    }
    return state
}

const TOGGLE_COLLAPSED='TOGGLE-COLLAPSED'

 const collapsedAC=()=>{
    return{type:TOGGLE_COLLAPSED}
 }

export const UnControlledAccordion= React.memo(UnControlledAccordionNoMemo);

 function UnControlledAccordionNoMemo(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false);
    let [collapsed, dispatch] = useReducer(reducer,false);

    return (
        <div>
            {/*<AccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>*/}
            <AccordionTitle title={props.title} setCollapsed={()=>dispatch(collapsedAC())} collapsed={collapsed}/>
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