import React, {ChangeEvent, useState} from 'react';

export const ControlldeIntup = () => {
    const [value, setValue] = useState<string>('');
    const onChangeSetValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
    return (
        <div>
            <input value={value} onChange={onChangeSetValue}/>
            <CheckBoxIntut/>
            <ControlledSelect/>
        </div>
    );
};


const CheckBoxIntut = () => {
    const [value, setValue] = useState<boolean>(false);
    const onChangeSetValue = () => setValue(!value);
    return (
        <div>
            <input type="checkbox" checked={value} onClick={onChangeSetValue}/>

        </div>
    );

};

const ControlledSelect = () => {
    const [selectValue, setSelectValue] = useState('2');
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.currentTarget.value);

    return (
        <select value={selectValue} onChange={onChange}>
            <option value="1">None</option>
            <option value="2">Minsk</option>
            <option value="3">Moscow</option>
            <option value="4">Kiev</option>
        </select>
    );
};