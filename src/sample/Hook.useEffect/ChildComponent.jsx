import { useEffect, useState } from "react"

export const ChildComponent = () => {

    // 물론 해당 컴포넌트가 닫힐때 까지 만 값이 유지된다.
    const [count,setCount]=useState(0);
    
    // 유즈 이펙트 돔의 기준으로 훅의 라이프사이클이다.! 생성/변경/소멸! 돔기준!
    
    // 상태가 변할때마다 실행
    // useEffect(()=>{});

    useEffect(()=>{
        alert("자식 컴포 생성")

        //자식컴포가  없어질때, 해당 로직이 실행된다.
        return () =>{
            alert("자식 컴포넌트 닫힘");
        }
    },[]);// 화면이 최초 열릴때 한번 실행

    // 화면이 최초로 열리면 무조건 한번은 실행되며
    // 의존성 배열에 들어가있는 state가 변할시
    useEffect(()=>{
        count && alert(`변경된 숫자는 \n ${count} 입니다.`)
    },[count]);// 화면이 최초 열릴때 한번 실행



    return (
        <div className="w-80 h-52 border border-black-400 pt-16">
            <p>카운트:{count} </p>
            <button onClick={()=>setCount(prev=>prev+1)} >증가</button>
            <p className="font-mono text-xl">ChildComponent</p>
        </div>
    )
}