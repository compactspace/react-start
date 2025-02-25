import { useState, useRef, useEffect} from "react";

export const Input = () => {
  const [text, setText] = useState("");
  //돔의 직접 접근하여 값을 저장한다(재랜더링 아님!!)
  // 객체의 주소가 변하는게 아니라! 그냥 값만 바뀌는거다.
  const refText = useRef("");
  return (
    <>
      {/* <input
        onChange={(e) => {
          setText(e.target.value);
          console.log(e.target.value);
        }}
      /> */}
      {/* <button onClick={()=>alert(text)}>클릭!</button> */}
      <br />
<input ref={refText}/>
<button onClick={()=>alert(refText.current.value)}>클릭!</button> 
    </>
  );
};
