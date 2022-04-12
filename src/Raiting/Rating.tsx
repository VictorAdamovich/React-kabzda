import React from "react";

type RatingType={
    value:0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingType) {

    if (props.value === 1) {
        return (<div>
                <Stars selected={true}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
            </div>
        )
    }

    if (props.value === 2) {
        return (<div>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
            </div>
        )
    }

    if (props.value === 3) {
        return (<div>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
            </div>
        )
    }

    if (props.value === 4) {
        return (<div>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={false}/>
            </div>
        )
    }

    if (props.value === 5) {
        return (<div>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={true}/>
            </div>
        )
    }

    return (<div>
        <Stars selected={false}/>
        <Stars selected={false}/>
        <Stars selected={false}/>
        <Stars selected={false}/>
        <Stars selected={false}/>
    </div>)


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