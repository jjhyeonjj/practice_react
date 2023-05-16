// const App = () => {
//     const handleClick = () => {
//         alert("버튼을 클릭했습니다.");
//     };

//     return <button onClick={handleClick}>클릭</button>
// };


// JSX 코드 내에서 인라인 방식(화살표 함수)
const appStyle = {
    textAlign: "center",
    marginTop: "25%"
}
const App = () => {
    return (
      <div style={appStyle}>
        <button onClick={() => { alert("버튼을 클릭했습니다!"); }}>클릭</button>
        <ControlButton message="재생">play</ControlButton>
        <ControlButton message="중지">stop</ControlButton>
        <PlayBtn musicName="숫자송" />
        <StopBtn />
      </div>
    );
};
  
// 이벤트 핸들러에서 props 참조
const ControlButton = ({ message, children }) => {
    return <button onClick={() => { alert(message); }}>{children}</button>;
};

// 이벤트 핸들러를 props 전달
const Btn = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>;
};

const PlayBtn = ({ musicName }) => {
    const showMusicName = () => {
        alert(`${musicName}을 재생`);
    };

    return <Btn onClick={showMusicName}>play {musicName}</Btn>;
};

const StopBtn = () => {
    const handleStop = () => {
        alert("재생 중지");
    };  

    return <Btn onClick={handleStop}>stop</Btn>;
};

export default App;
