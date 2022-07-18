function App() {
  return (
    <div>
      <p>Hello, world!</p>
      <button>BUTTON</button>
      <input onKeyDown={(e)=>{console.log(e.key)}} />
    </div>
  );
}

export default App;
