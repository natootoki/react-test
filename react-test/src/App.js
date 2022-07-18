import logo from './logo.svg';

function App() {
  return (
    <div>
      <p>Hello, world!</p>
      <button>BUTTON</button>
      <input onKeyDown={(e)=>{console.log(e.key+" pushed")}} onKeyUp={(e)=>{console.log(e.key+" released")}} />
    </div>
  );
}

export default App;
