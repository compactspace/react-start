import { useState } from "react";

export const SelectBox = () =>{
const [selectVal,setSelectVal]=useState();
//밑의 디펄트 ? 는 언디파인은 펠스로 즉 조건문에서 가능하다구
    return(
        <>
        <select onChange={(e)=>setSelectVal(e.target.value)} defaultValue={selectVal ?  selectVal : "c" }>
            <option value={"a"}>1번</option>
            <option value={"b"}>2번</option>
            <option value={"c"}>3번</option>
            <option value={"d"}>4번</option>
            <option value={"e"}>5번</option>
        </select>
        <br />
        선택된 값 : {selectVal ?  selectVal : "c" }
        </>
    );
}