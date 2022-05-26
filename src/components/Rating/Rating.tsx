import React from 'react';


type StarProps = {
    selected: boolean
}

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value>0}/>
            <Star selected={props.value>1}/>
            <Star selected={props.value>2}/>
            <Star selected={props.value>3}/>
            <Star selected={props.value>4}/>
        </div>
    );
}

function Star(props: StarProps) {
    return props.selected === true ? <span><b>Star</b> </span> : <span>Star </span>;
}