import Card from "./compoundComponents/Card";

function App() {
  return (
    <main className='flex justify-center'>
      <div className='min-h-screen bg-slate-200 w-2/5 p-5'>
        <Card>
          <Card.Heading>{/* <span>약관 동의</span> */}</Card.Heading>
          <Card.Checkbox labelName='이 약관에 동의하시겠씁니까?' />
          <Card.Checkbox labelName='이 약관에 동의하시겠씁니까?' />
          <Card.Checkbox labelName='이 약관에 동의하시겠씁니까?' />
          <Card.Checkbox labelName='이 약관에 동의하시겠씁니까?' />
          <Card.Checkbox labelName='이 약관에 동의하시겠씁니까?' />
        </Card>
        {/* <Card.Checkbox name='이 약관에 동의하시겠씁니까?' /> */}
        {/* <Card.Heading>
          <span>안녕</span>
        </Card.Heading> */}
        {/* 이런식으로 접근하면 에러 호출 */}
      </div>
    </main>
  );
}

export default App;
