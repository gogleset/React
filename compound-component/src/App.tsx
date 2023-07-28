/**
 * @gogleset App component
 */
import Card from "./Card";

function App() {
  return (
    <main className='flex justify-center'>
      <div className='min-h-screen bg-slate-200 w-2/5 p-5'>
        <Card>
          <Card.CheckBox labelName='이 약관에 동의하시겠씁니까?' />
          <Card.CheckBox labelName='이 약관에 동의하시겠씁니까?' />
          <Card.CheckBox labelName='이 약관에 동의하시겠씁니까?' />
          <Card.CheckBox labelName='이 약관에 동의하시겠씁니까?' />
          <Card.CheckBox labelName='이 약관에 동의하시겠씁니까?' />
        </Card>
        {/* <Card.CheckBox name='이 약관에 동의하시겠씁니까?' /> */}
        {/* 이런식으로 접근하면 에러 호출 */}
      </div>
    </main>
  );
}

export default App;
