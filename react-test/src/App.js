import styled from "styled-components";
import { useState } from "react"; 

export let position={x:0, y:0}
export let speed=4;

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
  console.log("hoge:"+hoge);

  return (
    <div>
      <p>Hello, world!</p>
      <button>BUTTON</button>
      <input onKeyDown={(e)=>{console.log(position);setHoge([position.x, position.y]);}} />
      <div id="cursor" style={{position:"absolute",top:position.y,left:position.x}}>|</div>
    </div>
  );
}

export default App;
