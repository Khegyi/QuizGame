import logo from './logo.svg';
import img_01 from './blur_imgs/img_01.jpg';
import './App.css';
import { Pixelify } from "react-pixelify";
import { useEffect, useState } from 'react';


function App() {


  const [pixelRate, setPixelRate] = useState(100)


function handleRangeInput(val) {
 // console.log(val.target.value)
  setPixelRate(val.target.value)
}
  useEffect(() => {


  }, [pixelRate]);
  
  return (
    <div className="App">
      <header className="App-header">
      {/*   <img src={logo} className="App-logo" alt="logo" /> */}
        <input type="range" min="0" max="100" step="20" onInput={handleRangeInput} defaultValue={100}></input>
       {/*  <img  src={img_01} className="blur" alt="logo" /> */}
      
        <Pixelify style={{width: "40px"}}  centered={true}   width={1024}
  height={800} className={"blured"}
 src={img_01} pixelSize={pixelRate} />
       
      </header>
    </div>
  );
}

export default App;
