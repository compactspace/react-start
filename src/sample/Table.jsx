import {  useState } from "react";
import tableData from "../common/tableData";
export const Table = () => {
  const [checkedItems, setCheckedItems] = useState([]);

 
  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    // 1. 전체 선택 체크 박스가 눌렸는지에 대한 정보를 가져와야 한다.
    //console.log(checked);
    if (checked) {
      // 전체 선택을 하는 경우, tableData의 id 값들을 checkedItems 에 배열형태로  저장
      const idArray = [];
      tableData.forEach((el) => {
        idArray.push(el.id);
      });
      // console.log(idArray);
      setCheckedItems(idArray);
    } else {
      //전체 선택 해제시, checkedItems 을 빈배열로 만든다.
      setCheckedItems([]);
    }
  };

  // 체크박스 단일 선택
  const handleSingleChecke = (checked, id) => {
    if (checked) {
      //각각의 체크 박스가 선택이 되는 경우, checkedItems 에 추가가 된다.
      setCheckedItems((prev) => [...prev, id]); // 주소값이 변경되어야 랜더링이 된다.
    } else {
      // 체크가 해제 되면, 체크된 아이템을 제외한 배열을 만든다.
      // 역시 필터도 새로운 배열을 반환한다. 즉 주소값이 변화한다.
      setCheckedItems(checkedItems.filter((el) => el !== id));
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={(e) => handleAllCheck(e.target.checked)} 
               checked={checkedItems.length === tableData.length ? true : false}
              />
            </th>
            <th>제목</th>
            <th>내용</th>
            <th>만든 날짜</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              // 단 data 에서  중복없이 확신할 수 있는 것을 key로 타겟팅한다. 그렇게 하란다 공식문서가.
              // 또한 리액트에선 index로 사용하지 말라고 한다.
              <tr key={data.id}>
                <td>
                  {/*  checked 는 속성이다.  */}
                  <input
                    type="checkbox"
                    value={data.id}
                    checked={checkedItems.includes(data.id) ? true : false}
                    onChange={(e) => {
                      handleSingleChecke(e.target.checked, data.id);
                    }}
                  />
                </td>
                <td>{data.title}</td>
                <td>{data.content}</td>
                <td>{data.date}</td>
              </tr>
            );
          })}
        </tbody>
          {checkedItems.length} 개가 선택 되었습니다.

      </table>
    </>
  );
};
