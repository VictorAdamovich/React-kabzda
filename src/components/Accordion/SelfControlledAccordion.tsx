import React from 'react';


type ItemType={
    title:string
    value:any
}

type AccordionBodyType={
    items:ItemType[]
    onClick:(value:string)=>void
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed:(collapsed:boolean)=>void
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    items:ItemType[]
    setCollapsed:(collapsed:boolean)=>void
    onClick:(value:string)=>void
}


export const SelfControlledAccardion= React.memo(SelfControlledAccardionNoMemo)

 function SelfControlledAccardionNoMemo(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}  setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    );

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={()=>props.setCollapsed(!props.collapsed)}>{props.title}</h3>;
}

function AccordionBody(props:AccordionBodyType) {
    return <ul>
        {props.items.map((el,i)=><li onClick={()=>props.onClick(el.value)} key={i}>{el.title}</li>)}
    </ul>;

}