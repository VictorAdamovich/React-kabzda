import React from "react";

type RatingType={
    value:0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingType) {
    return (
        <div>
            <Stars selected={props.value > 0}/>
            <Stars selected={props.value > 1}/>
            <Stars selected={props.value > 2}/>
            <Stars selected={props.value > 3}/>
            <Stars selected={props.value > 4}/>
        </div>
    )
}
type StarPropsType ={
    selected:boolean
}


function Stars(props: StarPropsType) {
    if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>

    }
}