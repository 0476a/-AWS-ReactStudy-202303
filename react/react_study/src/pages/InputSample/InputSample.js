import React, { useRef, useState } from 'react';

const InputSample = () => {
    const userInfo = {
        username: '',
        password: ''
    }

    const [userInput, setUserInput] = useState(userInfo);
    const [userInfoText, setUserInfoText] = useState(userInfo);

    const { username, password } = userInfoText;

    // 패스워드 input 객체를 들고오는 역할을 함 Ref 
    const passwordRef = useRef();

    const handlerChange = (e) => {
        /** 이벤트가 일어난 대상 e.target */
        /** document를 쓰는 것과 같다. */
        /** const n = e.target.name; */
        /** const v = e.target.value; */
        /** 위 두줄을 줄여준 것이 비구조 할당이다. */
        const { name, value } = e.target;
        setUserInput({...userInput, [name]: value});
        /** userInput에 name의 value값으로 바꿔준다. */
        /** 풀어쓰게 되면 */
        // {
        //     username: ''
        //     password: '',
        // }
        // setUserInput({...userInput, username: value})
        // setUserInput({...userInput, password: value})
        // 이거랑 같다.
    }

    const nextFocus = (e) => {
        if(e.keyCode === 13) {
            passwordRef.current.focus();
        }
    }

    const submitHandler = (e) => {
        if(e.keyCode === 13) {
            setUserInfoText({...userInput});
        }
    }

    return (
        <div>
            <input 
                type="text" 
                onChange={handlerChange} 
                onKeyUp={nextFocus}
                name="username" 
                
            />
            <input 
                type="text" 
                onChange={handlerChange} 
                onKeyUp={submitHandler}
                name="password" 
                ref={passwordRef}
            />
            <div>username: {username}</div>
            <div>password: {password}</div>
        </div>
    );
};

export default InputSample;