import React, { Fragment, useState } from 'react';


const thing = () => <span style={{ backgroundColor: "black", height: '1px', width: '1px' }}></span>

export default () => {
    // const [todos, setTodos] = useState([]);
    // const [input, setInput] = useState('');

    // function clickButton () {
    //     setTodos([...todos, input]);
    //     setInput('');
    // }
    const rows = [];
    for (let j = 0; j < 300; j++) {
        const items = [];
        for (let i = 0; i < 300; i++) {
            items.push(<span style={{ backgroundColor: "black"}}>X</span>)
        }
        rows.push((<div>{items}</div>))
    }
    return (
        <Fragment>
            {rows}
        </Fragment>
    )
}

