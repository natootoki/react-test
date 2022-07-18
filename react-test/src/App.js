import { useEffect, useState } from "react"; 

export let position={x:0, y:0}
export let speed=4;
export let pushed=false;

const keydown=(e)=>{
  console.log(e.key);
  if(e.key==="ArrowRight"){
    position.x+=speed;
  }else if(e.key==="ArrowLeft"){
    position.x-=speed;
  }else if(e.key==="ArrowUp"){
    position.y-=speed;
  }else if(e.key==="ArrowDown"){
    position.y+=speed;
  }
  console.log("position("+position.x+", "+position.y+")")
}

document.body.addEventListener("keydown", keydown);

function App() {
  const[hoge,setHoge]=useState([position.x, position.y]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setHoge([position.x, position.y]);
    },50);
    return ()=>clearInterval(interval);
  }, []);

  return (
    <div>
      <p onClick={()=>{alert("hello")}}>Hello, world!</p>
      <button>BUTTON</button>
      <input onKeyDown={(e)=>{}} />
      <div id="cursor" style={{position:"absolute",top:position.y,left:position.x}}>|</div>
    </div>
  );
}

export default App;
