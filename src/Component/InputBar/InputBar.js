import React, { useContext, useState } from 'react';
import './InputBarCss.css';
import { TodoContext } from '../../Context/TodoContext';

export default function InputBar() {
    const { todoArr, addTodo } = useContext(TodoContext);
    const [text, setText] = useState('');
    function handleTodo() {
        if (text !== '') {
            const item = {
                id: Date.now(),
                todoMsg: text,
                completed: false
            }
            addTodo(item);
            setText('')
        }
        else{
            alert('Please enter some message first...');
        }
    }

    function handleKeyEnter(e) {
        if (e.key === 'Enter') {
            handleTodo();
        }
    }
    return (
        <div className='input-holder' >
            <input className='input-Bar' placeholder='Write Todo...' onChange={(e) => { setText(e.target.value) }} onKeyDown={(e)=>{handleKeyEnter(e)}} value={text} />
            <button className='btn' onClick={() => { handleTodo() }}> Add Item
                <span></span>
            </button>
        </div>
    )
}