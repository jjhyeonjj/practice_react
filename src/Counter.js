import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1> Count 값 : {count}</h1>
            {/* setState를 사용하여 버튼 클릭 시 state 값이 1씩 증가*/}
            <button onClick={() => setCount(count + 1)}>1씩 증가</button>
        </div>
    )
}
export default Counter;