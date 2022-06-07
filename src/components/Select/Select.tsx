import React, {useState} from 'react';
import s from './Select.module.css';

type ItemType = {
    title: string
    value: number
}

type SelectPropsType = {
    title: string
    value?: number
    onChange: (value: number) => void
    item: Array<ItemType>
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState<boolean>(true);
    const [hoveredElement, setHoveredElement] = useState<number | undefined>(props.value);

    const selectedItem = props.item.find(i => i.value === props.value);

    const toggleItems = () => setActive(!active);
    const onItemClick = (value: number) => {
        props.onChange(value);
        toggleItems();
    };


    return (
        <div className={active ? s.select + ' ' + s.active : s.select}>
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active &&
                <div className={s.items}>
                    {props.item.map(i => <div
                        onMouseEnter={() => setHoveredElement(i.value)}
                        className={i.value === hoveredElement ? s.selected + ' ' + s.item : s.item}
                        onClick={() => onItemClick(i.value)}
                        key={i.value}>{i.title}</div>)}
                </div>
            }
        </div>
    );
};


export default React.memo(Select)


