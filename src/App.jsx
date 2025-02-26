import { useMemo } from "react";
import { Button } from "./sample/Button.usestate";
import { Input } from "./sample/Input.useRef";
import { SelectBox } from "./sample/SelectBox.usestate";
//import { Table } from "./sample/Table";
import { ParantComponent } from "./sample/Hook.useEffect/ParantComponent";
import { MemoComponent } from "./sample/MemoComponent.useMemo.jsx/MemoComponent.useMemo";
import { ChildComponent } from "./sample/ChildComponent.proos";
import { MemoHeavyJobComponent } from "./sample/MemoComponent.React.Memo";
import { MemoHeavyJobComponent2 } from "./sample/MemoComponent.React.Memo";
import { TodoMain } from "./sample/TodoProject/TodoMain";
import { useState } from "react";
function App() {
{/* 주의할껀 현재 파일 자체가 리랜더링이 되는데 게닥 ㅏ numObj={{num: Number(plusNum)} 꼴의 오브젝트로 리랜더링이 되었다면 새로운 주소를 부여받아
        리랜더링이 된다. 일반 프라이머리 타입이였다면 이런상황은 없지만<div className=""></div>
    */}
    const [plusNum, setPlusNum]=useState(0);
    const [multiNum, setMultiNum]=useState(0);

    //메모에 감싸거 넘긴다.
    // 왜냐 주소값을 저장해둔다는것 이다.  리랜더링 될시 계속 새로운 주소를 부여받아 스테이트가 변경되었다고 인식하니.. 원..
    // 객체체를 memo 시킨다.(아래 pros numObj대신 쓸것임)
    const memoNum= useMemo(()=>({num:Number(plusNum) }),[plusNum]);

  return (  
    <>
{/* <Button/> */}
    {/* <Input/> */}
    {/* <SelectBox/> */}
    {/* <Table/> */}
    {/* <ParantComponent/> */}
    {/* <MemoComponent/> */}    
    {/* <ChildComponent title={"제목1"} content={"내용을 작성1"}/>
    <ChildComponent title={"제목2"} content={"내용을 작성2"}  />
    <ChildComponent title={"제목3"} content={"내용을 작성3"}/>
    <ChildComponent title={"제목4"} content={"내용을 작성4"}/>
    <ChildComponent title={"제목5"} content={"내용을 작성5"}/>
    <ChildComponent title={"제목6"} content={"내용을 작성6"}/> */}
    {/* <input type="number" onChange={(e)=> setPlusNum(e.target.value)} /> */}
    {/* <HeavyJobComponent  num={Number(plusNum)} numObj={{num: Number(plusNum)}}/> */}
    {/* 주의할껀 현재 파일 자체가 리랜더링이 되는데 게닥 ㅏ numObj={{num: Number(plusNum)} 꼴의 오브젝트로 리랜더링이 되었다면 새로운 주소를 부여받아
        리랜더링이 된다. 일반 프라이머리 타입이였다면 이런상황은 없지만<div className=""></div>
   즉 현재 메모제이현으로 해결못하고
   계속 말하지만 현재는 app자체가 리랜더링이기 때문
   */}
        {/* <MemoHeavyJobComponent  num={Number(plusNum)} numObj={memoNum} /> */}
 
    {/* <input type="number" onChange={(e)=> setMultiNum(e.target.value)} />
    <MemoHeavyJobComponent2 num={Number(multiNum)}/> */}
    {/* <HeavyJobComponent2 num={Number(multiNum)}/> */}
    
<TodoMain/>
    
    </>
  );


}

export default App;
