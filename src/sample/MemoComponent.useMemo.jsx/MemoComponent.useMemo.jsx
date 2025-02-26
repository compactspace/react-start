import { useMemo, useState } from "react";


// 10,000개의 데이터를 만드는 중
const generateData = () => {
    return Array.from({ length: 10000 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
        value: Math.floor(Math.random() * 1000), // 0~999 랜덤 숫자
    }));
};

const data=generateData();


export const MemoComponent = ()=>{


const [search,setSearch]=useState("");

const filteredDataCount=()=>{
    console.log("검색 결과 개수를 계산 중..")
    return data.filter((item)=>
        item.name.toLowerCase().includes(search.toLowerCase())
    ).length
}

//서치 값이 변할때만 싫행도록 의존성 배열을 넣는다.
// 결과값을 메모화 해서 필요한 경우 값만 기억하고 있다가 보여준다. 컴포넌트 자제초 메모제이션이 가능하다.!!!
const filteredDataCountMemo = useMemo(()=>{
    console.log("useMemo를 사용해서 \n 검색 결과를 계산 중.....");
    return data.filter((item)=>
        item.name.toLowerCase().includes(search.toLowerCase())
    ).length
},[search]);


    return(
   
        <div>
            <h2>useMemo</h2>
            <input
                type="number"
                placeholder="검색어 입력..."
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
            />
            <p>검색 결과 개수: {filteredDataCountMemo}  개</p>
            <br/>
            <p>{filteredDataCountMemo} 개의 결과로 무엇을 할 예정인가요?</p>
        </div>
       
    )
}