import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let position={x:0, y:0}
let speed=4;

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
