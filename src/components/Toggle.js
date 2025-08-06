import React,{useState}from "react";

function Toggle() {
  function handleButton(){
    setButton(button =>!button)
  }
  const[button ,setButton] = useState(true)
  const color = button ? "red" :'white'
  return <button  style ={{background:color}}  onClick={handleButton}> {button? "ON" : "OFF"}</button>;
}

export default Toggle;
