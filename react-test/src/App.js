import { useEffect, useState } from "react"; 

let position={x:0, y:0}
let speed=1;
let pushed={right:false, left:false, up:false, down:false};

const keydown=(e)=>{
  //console.log(e.key);
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
  //console.log(e.key);
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
      //console.log(window.requestAnimationFrame);
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
    },window.requestAnimationFrame);
    return ()=>clearInterval(interval);
  }, []);

  return (
    <div>
      <p>WhiteBoard with React</p>
      <div id="cursor" style={{position:"absolute",top:position.y,left:position.x}}>|</div>
    </div>
  );
}

export default App;
