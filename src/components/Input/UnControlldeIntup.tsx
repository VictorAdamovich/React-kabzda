import React, {useRef, useState} from 'react';

const UnControlldeIntupNoMemo = () => {
    const [value, setValue] = useState<string>('');
    return (
        <div>
            <input onChange={(e) => setValue(e.currentTarget.value)}/> - {value}
            <UnControlledInputRef/>

        </div>
    );
};

const UnControlledInputRef = () => {
        const [value, setValue] = useState('');
        const inputRef = useRef<HTMLInputElement>(null);

        const onClickSetValue = () => {
            let el = inputRef.current as HTMLInputElement;
            setValue(el.value);
        };

        return (
            <div>
                <input ref={inputRef} type="text"/>
                <button onClick={onClickSetValue}>Save Value</button>
                - {value}
            </div>
        );
    }
;


export const UnControlldeIntup=React.memo(UnControlldeIntupNoMemo);