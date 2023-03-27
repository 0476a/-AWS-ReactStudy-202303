/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react'
import * as S from './style';

// 컴포넌트가 랜더링 될때 한번 실행됨.
const UserList = () =>{
    /** 요소가 랜더링 되어졌을 때 실행되는 함수와 빈 리스트 값을 받는다. */
    /** 요소가 새로 열리면 안에 함수 안에있는 실행문이 실행됨! */
    useEffect(() => {
        console.log("컴보넌트 랜더링");
    }, []);

    // user 객체를 하나 만들어 둠.
    const user = {
        id: 0,
        username: '',
        password: '',
        name: '',
        email: '',
        modifyFlag: false
    }

    const userIndex = useRef(1);
    const [users, setUsers] = useState([]);
    const [inputs, setInputs] = useState(user);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const addButtonRef = useRef();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    }

    // 엔터키를 눌렀을 때 값을 입력하고 포커스를 이동시켜주는 역할
    const keyupHandler = (e) => {
        if(e.keyCode === 13) {
            let index = 0;
            switch(e.target.name) {
                // 인덱스 값을 설정해준다.
                case 'username': index = 1; break;
                case 'password': index = 2; break;
                case 'name': index = 3; break;
                default: addButtonRef.current.click();
            }
            // 인덱스가 0이면 실행이 안됨.
            if(index !== 0) {
                inputRefs[index].current.focus();
            }
        }
    }

    const addHandler = () => {
        // 깊은 복사에 해당 됨. inputs의 값만 복사해서 넣어준다.
        const user = {
            ...inputs
        };

        user.id = userIndex.current++;

        setUsers([...users, user]);
        console.log(users)
    }

    const onRemove = (index) => {
        // users.splice(index - 1, 1);
        // setUsers([...users]);
        setUsers(users.filter(user => user.id !== index));
    }

    const onModify = (index) => {
        setUsers(users.map(user => {
            if(user.id === index) {
                // 기존에 있는 값을 덮어줘야지 아니면 이전에 작업했던 것이 남아있어서 그대로 적용되어 버린다.
                setInputs({...user});
                user.modifyFlag = true;
            } else {
                user.modifyFlag = false;
            }
            return user;
        }));
    }

    const onSave = (index) => {
        setUsers(users.map(user => {
            if(user.id === index) {
                return {
                    ...inputs
                };
            }
            return user;
        }));
    }



    // const users = [
    //     {
    //         id: 1,
    //         username: 'aaa',
    //         password: '1234',
    //         name: 'AAA',
    //         email: 'aaa@gmail.com'
    //     },
    //     {
    //         id: 2,
    //         username: 'bbb',
    //         password: '1234',
    //         name: 'BBB',
    //         email: 'bbb@gmail.com'
    //     },
    //     {
    //         id: 3,
    //         username: 'ccc',
    //         password: '1234',
    //         name: 'CCC',
    //         email: 'ccc@gmail.com'
    //     },
    // ]

    /** 여기서 useRef는 인덱스를 만들어 줄때 사용 */
    // const userIndex = useRef(4);

    return (
        <div css={S.Container}>
            <div>
                {/* // onchange를 줘서 값이 바뀌는 것을 유지 시켜준다. name을 통해 구분을 함. */}
                <input type="text" css={S.Input} onKeyUp={keyupHandler} onChange={inputHandler} placeholder='username' name='username' ref={inputRefs[0]}/> 
                <input type="text" css={S.Input} onKeyUp={keyupHandler} onChange={inputHandler} placeholder='password' name='password' ref={inputRefs[1]}/> 
                <input type="text" css={S.Input} onKeyUp={keyupHandler} onChange={inputHandler} placeholder='name' name='name' ref={inputRefs[2]}/> 
                <input type="text" css={S.Input} onKeyUp={keyupHandler} onChange={inputHandler} placeholder='email' name='email' ref={inputRefs[3]}/> 
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
                        <th css={S.ThAndTd}>update</th>
                        <th css={S.ThAndTd}>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* // map은 배열에서 값을 그대로 꺼내서 가공해서 새로운 배열로 만드는 것 */}
                    {/* // users는 State로 관리가 되어야 한다. */}
                    {users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td css={S.ThAndTd}>{user.id}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='username' name='username' ref={inputRefs[0]} defaultValue={user.username}/> ):user.username}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='password' name='password' ref={inputRefs[1]} defaultValue={user.password}/> ):user.password}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='name' name='name' ref={inputRefs[2]} defaultValue={user.name}/> ):user.name}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='email' name='email' ref={inputRefs[3]} defaultValue={user.email}/> ):user.email}</td>
                                <td css={S.ThAndTd}>
                                    {user.modifyFlag
                                        ? (<button onClick={() => onSave(user.id)}>확인</button>)
                                        : <button onClick={() => onModify(user.id)}>수정</button>
                                    }
                                    
                                </td>
                                <td css={S.ThAndTd}>
                                    <button onClick={() => onRemove(user.id)}>삭제</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

// export를 해줘야 외부에서 가져다 사용이 가능!
export default UserList;