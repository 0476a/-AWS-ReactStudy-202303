import { useState } from "react";
import Hello from "./components/Hello";
import Button from "./components/Button";
import UserInfo from "./components/UserInfo";


function App() {
  const [name, setName] = useState("");

  const handlerClick = () => {
    console.log("이름전달 버튼 클릭");
    setName("김삼겹");
  }

  return (
    <>
      <div>
      {/** JSX 주석 
          1. JSX는 javascript 함수 return에 HTML 태그 또는 component들을 표현할 수 표현식이다.
          2. 하나의 JSX 즉, return에는 하나의 태그 묶음만 들어올 수 있다.
          3. <></> 비어있는 태그를 열고 닫으면 실제 렌더링 시에 무시된다.
    */}
      </div>
      <div>
        <Hello />
        <Button handlerClick={handlerClick}/>
        <UserInfo name={name} phone="010-1234-5678" address="부산 금정구"/>
      </div>
    </>
    
  );
}

export default App;
