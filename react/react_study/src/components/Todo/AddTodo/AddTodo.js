/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style';
import { FcPlus } from 'react-icons/fc';

const AddTodo = ({ onChange, onKeyUp, value, onAdd }) => {
    return (
        <div css={S.TodoAddition}>
            <input css={S.AdditionInput} type="text" placeholder="Add your new Todo" onChange={onChange} onKeyUp={onKeyUp} value={value}/>
            <button css={S.TodoAddButton} onClick={onAdd}><FcPlus /></button>
        </div>
    );
};

export default AddTodo;