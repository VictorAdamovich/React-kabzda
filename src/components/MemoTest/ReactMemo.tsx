import React, {useState} from 'react';


const NewMassagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>;

};

const UsersSecret = (props: { users: string[] }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>;
};

const Users = React.memo(UsersSecret);


export const ReactMemo = (props: any) => {
    const [count, setCount] = useState(1);
    const [users, setUsers] = useState(['Vasya', 'Petya', 'Kolya']);


    const addUser = () => {
        setUsers([...users, 'Sasha']);
    }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => addUser}>+</button>
            <NewMassagesCounter count={count}/>
            <Users users={users}/>
        </div>
    );
};

