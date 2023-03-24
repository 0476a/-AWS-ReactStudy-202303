/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react'
import * as S from './style';

const UserList = () =>{
    /** 요소가 랜더링 되어졌을 때 실행되는 함수와 빈 리스트 값을 받는다. */
    /** 요소가 새로 열리면 안에 함수 안에있는 실행문이 실행됨! */
    useEffect(() => {
        console.log("컴보넌트 랜더링");
    }, []);

    const user = {
        id: 0,
        username: '',
        password: '',
        name: '',
        email: ''
    }

    const [Inputs, setInputs] = useState(user);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const addButtonRef = useRef();

    const inputHandler = (e) => {
        const { name, value } = e.taget;
        setInputs({...Inputs, [name]: value});
    }

    const keyupHandler = (e) => {
        if(e.keyCode === 13) {
            let index = 0;
            switch(e.target.name) {
                case 'username': index = 1; break;
                case 'password': index = 2; break;
                case 'name': index = 3; break;
                default: addButtonRef.current.click();
            }
            if(index !== 0) {
                inputRefs[index].current.focus();
            }
        }
    }

    const addHandler = (e) => {
    }

    const users = [
        {
            id: 1,
            username: 'aaa',
            password: '1234',
            name: 'AAA',
            email: 'aaa@gmail.com'
        },
        {
            id: 2,
            username: 'bbb',
            password: '1234',
            name: 'BBB',
            email: 'bbb@gmail.com'
        },
        {
            id: 3,
            username: 'ccc',
            password: '1234',
            name: 'CCC',
            email: 'ccc@gmail.com'
        },
    ]

    /** 여기서 useRef는 인덱스를 만들어 줄때 사용 */
    const userIndex = useRef(4);

    return (
        <div css={S.Container}>
            <div>
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='username' name='username' value={0} ref={inputRefs[0]}/> 
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='password' name='password' value={0} ref={inputRefs[1]}/> 
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='name' name='name' value={0} ref={inputRefs[2]}/> 
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='email' name='email' value={0} ref={inputRefs[3]}/> 
                <button type='button' onClick={addHandler} ref={addButtonRef}>추가</button>
            </div>
            <table css={S.Table}>
                <thead>
                    <tr>
                        <th css={S.ThAndTd}>index</th>
                        <th css={S.ThAndTd}>username</th>
                        <th css={S.ThAndTd}>password</th>
                        <th css={S.ThAndTd}>name</th>    
                        <th css={S.ThAndTd}>email</th>    
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {

                        return (
                            <tr>
                                <td css={S.ThAndTd}>{user.id}</td>
                                <td css={S.ThAndTd}>{user.username}</td>
                                <td css={S.ThAndTd}>{user.password}</td>
                                <td css={S.ThAndTd}>{user.name}</td>
                                <td css={S.ThAndTd}>{user.email}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};


export default UserList;