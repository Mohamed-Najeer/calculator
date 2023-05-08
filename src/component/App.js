import React,{useState} from 'react'; 
import '../style/App.css';

function App() {

 const [value,setValue] = useState("");



const func=()=>{
  setValue(eval(value));
}

const cancel=()=>{
  setValue("");
}


  return (
    <div className="calc">
      <input type="text" value={value}/>
    <div>
      <button onClick={e =>setValue(value + "+")}>+</button>
      <button onClick={e =>value + setValue(value +"-")}>-</button>
      <button onClick={e =>value + setValue(value +"/")}>/</button>
      <button onClick={e =>value + setValue(value +"%")}>%</button>
    </div>
    <div>
    <button onClick={e =>value + setValue(value +"9")}>9</button>
    <button onClick={e =>value + setValue(value +"8")}>8</button>
    <button onClick={e =>value + setValue(value +"7")}>7</button>
    <button onClick={e =>value + setValue(value +"^")}>^</button>
  </div>
  <div>
  <button onClick={e =>value + setValue(value +"6")}>6</button>
  <button onClick={e =>value + setValue(value +"5")}>5</button>
  <button onClick={e =>value + setValue(value +"4")}>4</button>
  <button onClick={cancel}>Del</button>
</div>  

<div>
  <button onClick={e =>value + setValue(value +"3")}>3</button>
  <button onClick={e =>value + setValue(value +"2")}>2</button>
  <button onClick={e =>value + setValue(value +"1")}>1</button>
  <button onClick={e =>value + setValue(value +"0")}>0</button>
</div>  

<div>
  <button onClick={e =>value + setValue(value +"00")}>00</button>
  <button onClick={e =>value + setValue(value +".")}>.</button>
  <button onClick={e =>setValue(value.slice(0,value.length-1))}>c</button>
  <button onClick={e =>value + setValue(value +"000")}>000</button>
 
</div>  

<div>
<button className="equal" onClick={func}>Enter</button>
</div>
</div>
  );
}

export default App;
