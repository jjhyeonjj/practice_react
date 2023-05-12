const Animal = ({myName, skill, leg}) => {
  return (
    <>
      <h2> 
        나는 {myName}입니다. &nbsp;
        나의 능력은 {skill}입니다. &nbsp;
        나의 다리는 {leg}개 입니다.
      </h2>
    </>
  )
}

export default function App() {
  return (
    <>
      <h1>hello, world</h1>
      <Animal myName="호랑이" skill="달리기" leg="4"></Animal>   
      <Animal myName="독수리" skill="날기" leg="2"></Animal>   
      <Animal myName="상어" skill="수영" leg="0"></Animal>   
    </>
  );
}

