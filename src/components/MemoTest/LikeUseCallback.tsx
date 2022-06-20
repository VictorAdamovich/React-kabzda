import React, {useCallback, useMemo, useState} from 'react';


const NewMassagesCounter = (props: { count: number }) => {
    console.log('render NewMassagesCounter');
    return <div>{props.count}</div>;

};


export const ReactCallBack = (props: any) => {
    console.log('render ReactCallBack');
    const [count, setCount] = useState(1);
    const [books, setBooks] = useState(['Vasya', 'Petya', 'Kolya']);


    const addBooks = useCallback(() => {
        console.log(books);
        setBooks([...books, 'JS' + new Date().getTime()]);
    }, [books]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
            <Book addBooks={addBooks}/>
        </div>
    );
};


type BookPropsType = {
    addBooks: () => void
}

const BooksSecret = (props: BookPropsType) => {
    console.log('render BooksSecret');
    debugger
    return (
        <div>
            <button onClick={() =>props.addBooks}>add books</button>
        </div>
    );
};


const Book = React.memo(BooksSecret);