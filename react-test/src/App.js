import { useEffect, useState } from "react"; 

export let position={x:0, y:0}
export let speed=4;
export let pushed={right:false, left:false, up:false, down:false};

const keydown=(e)=>{
  console.log(e.key);
  if(e.key==="ArrowRight"){
    pushed.right=true;
  }else if(e.key==="ArrowLeft"){
    pushed.left=true;
  }else if(e.key==="ArrowUp"){
    pushed.up=true;
  }else if(e.key==="ArrowDown"){
    pushed.down=true;
  }
  //console.log("position("+position.x+", "+position.y+")")
}

const keyup=(e)=>{
  console.log(e.key);
  if(e.key==="ArrowRight"){
    pushed.right=false;
  }else if(e.key==="ArrowLeft"){
    pushed.left=false;
  }else if(e.key==="ArrowUp"){
    pushed.up=false;
  }else if(e.key==="ArrowDown"){
    pushed.down=false;
  }
}

document.body.addEventListener("keydown", keydown);
document.body.addEventListener("keyup", keyup);

function App() {
  const[hoge,setHoge]=useState([position.x, position.y]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(pushed.right){
        position.x+=speed;
      }
      if(pushed.left){
        position.x-=speed;
      }
      if(pushed.up){
        position.y-=speed;
      }
      if(pushed.down){
        position.y+=speed;
      }
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
