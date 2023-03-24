/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from './style';


function Input({  type, placeholder, inputRef }) {
    return (
        <input 
            css={S.style}
            type={type}
            placeholder={placeholder}
            ref={inputRef}
        />
    );
}

export default Input;