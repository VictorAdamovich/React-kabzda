import React, {ChangeEvent} from 'react';


type ItemTypes = {
    title: string
    value: number

}

type SelectPropsType = {
    title: string
    value: any
    // onChange: (value: number) => void
    onChange: any
    item: ItemTypes[]
}


export const Select = (props: SelectPropsType) => {
    const onChangeHandler=(e:ChangeEvent<HTMLSelectElement>)=> {
        return props.onChange(e.currentTarget.value);
    }
    return (
        <div>
            <select name={props.title} value={props.value} onChange={onChangeHandler}>
                {props.item.map((el, i) =>
                    <option
                        key={i}
                        value={el.value}
                    >{el.title}</option>)}
            </select>

        </div>
    );
};

