import React, {useState} from "react";

type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function SelfRating() {
    let [ratingValue, setRatingValue] = useState(0)

    const addRating = (n: number) => setRatingValue(n)

    return (
        <div>
            <Stars selected={ratingValue > 0}/>
            <button onClick={() => {
                addRating(1)
            }}>1
            </button>
            <Stars selected={ratingValue > 1}/>
            <button onClick={() => {
                addRating(2)
            }}>2
            </button>
            <Stars selected={ratingValue > 2}/>
            <button onClick={() => {
                addRating(3)
            }}>3
            </button>
            <Stars selected={ratingValue > 3}/>
            <button onClick={() => {
                addRating(4)
            }}>4
            </button>
            <Stars selected={ratingValue > 4}/>
            <button onClick={() => {
                addRating(5)
            }}>5
            </button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

//
// function Stars(props: StarPropsType) {
//     if (props.selected) {
//         return <span><b>star </b></span>
//     } else {
//         return <span>star </span>
//
//     }
// }

function Stars(props: StarPropsType) {
    return props.selected ? <span><b>star </b></span> : <span>star </span>
}