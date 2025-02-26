
import { Button } from "./sample/Button.usestate";
import { Input } from "./sample/Input.useRef";
import { SelectBox } from "./sample/SelectBox.usestate";
//import { Table } from "./sample/Table";
import { ParantComponent } from "./sample/Hook.useEffect/ParantComponent";
import { MemoComponent } from "./sample/MemoComponent.useMemo.jsx/MemoComponent.useMemo";
import { ChildComponent } from "./sample/ChildComponent.proos";



import { MemoHeavyJobComponent } from "./sample/MemoComponent.React.Memo";
import { MemoHeavyJobComponent2 } from "./sample/MemoComponent.React.Memo";

import { useState } from "react";
function App() {

    const [plusNum, setPlusNum]=useState(0);
    const [multiNum, setMultiNum]=useState(0);


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
    <input type="number" onChange={(e)=> setPlusNum(e.target.value)} />
    {/* <HeavyJobComponent  num={Number(plusNum)} numObj={{num: Number(plusNum)}}/> */}
        <MemoHeavyJobComponent  num={Number(plusNum)} numObj={{num: Number(plusNum)}} />
 
    <input type="number" onChange={(e)=> setMultiNum(e.target.value)} />
    <MemoHeavyJobComponent2 num={Number(multiNum)}/>
    {/* <HeavyJobComponent2 num={Number(multiNum)}/> */}
    
    </>
  );


}

export default App;
