import PropsTest from "./components/PropsTest";
import UserInfo from "./components/UserInfo";

function App() {
  const userList = [
    {username: "aaa", name: "AAA", email: "aaa@naver.com"},
    {username: "bbb", name: "BBB", email: "bbb@naver.com"},
    {username: "ccc", name: "CCC", email: "ccc@naver.com"},
    {username: "ddd", name: "DDD"}
  ];

  return (
    <>
      <PropsTest
        username="aaa" 
        name="김삼겹" 
        email="aaa@naver.com" 
        handlerClick={() => console.log("클릭함!!!")}
      />
      {['김준일', '김준이', '김준삼']}
      {userList.map(user =>
          (
            <UserInfo username={user.username} name={user.name} email={user.email}/>
          )
      )}
    </>
  );
}

export default App;
