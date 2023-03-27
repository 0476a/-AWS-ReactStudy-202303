/** @jsxImportSource @emotion/react */
import * as S from './style';
import React, { useRef, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';

const TodoList = () => {

    const todo = {
        id: 0
    }

    
    const todoIndex = useRef(1);
    const [todos, setTodos] = useState([]);
    const [inputs, setInputs] = useState(todo);
    const inputRef = useRef();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    }

    const addHandler = () => {
        const todo = {
            ...inputs
        };

        todo.id = todoIndex.current++;

        setTodos([...todos, todo]);
    }

    const onRemove = (index) => {
        setTodos(todos.filter(todo => todo.id !== index));
    }


    return (
        <div css={S.Container}>
            <div css={S.InputContainer}>
                <input css={S.todoInput} type="text" onChange={inputHandler} placeholder='오늘 할일을 입력하세요~' name='todo' ref={inputRef[1]}/>
                <button css={S.addButton}type='button' onClick={addHandler}><BiPlus /></button>
            </div>
                {todos.map(todo => {
                    return(
                        <div css={S.Todo} key={todo.id}>
                            <div css={S.Work}>{todo.todo}</div>
                            <button type='button' css={S.DeleteButton} onClick={() => onRemove(todo.id)}><BiMinus /></button>
                        </div>
                    );
                })}
        </div>
    );
};

export default TodoList;