import React from 'react'
import { useState } from 'react';
import { evaluate } from "mathjs";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdOutlinePercent } from "react-icons/md";
import { TbSquareRoot2 } from "react-icons/tb";
import { TbSuperscript } from "react-icons/tb";
import { HiMinusSmall } from "react-icons/hi2";

const App = () => {

  const [inputValue, setinputValue] = useState('')
  const [resultent, setresultent] = useState([]);

  const handleClick = (value) => {
    setinputValue(inputValue + value);
  }

const calculate = () => {
  const result = evaluate(inputValue);
  setinputValue(result.toString());
  setresultent([...resultent, inputValue + "=" + result])
  console.log(resultent);
}

const sqareRoot = () => {
  setinputValue(Math.sqrt(inputValue))
}

const square = () => {
  setinputValue(Math.pow(inputValue, 2))
}

const fraction = () => {
  setinputValue(1 / inputValue)
}

const backspace = () => {
  setinputValue((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev));
}

const ClearAll = () => {
  setinputValue("")
}

const btn = { border: "2px solid", borderRadius: "7%", padding: "7px"}
const btn2 = { border: "2px solid", borderRadius: "7%", padding: "7px", paddingLeft: "20px" }

return (
  <div className='w-100% h-100%'>
    <div className=' lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
                       md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
                       sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
                       text-2xl border-2 p-3 rounded bg-gray-700 lg:w-1/4 md:w-2/5 sm:w-1/2'>

      <div className='mb-1'><input className=' text-2xl w-1/1 h-15 border-2 outline-0 border-white text-white bg-gray-600 rounded text-right pr-2 ' type='text' value={inputValue}></input></div>
      <div className='grid grid-cols-4 p-4 border-2 gap-4 rounded text-white bg-gray-600 transition-transform duration-150'>
        <button onClick={ClearAll} style={btn} onMouseLeave={() => setPressed(false)}>C</button>
        <button onClick={fraction} style={btn}>1/x</button>
        <button onClick={sqareRoot} style={btn2}><TbSquareRoot2 /></button>
        <button onClick={backspace} style={btn2}><FaDeleteLeft /></button>

        <button onClick={() => handleClick('%')} style={btn2} ><MdOutlinePercent /></button>
        <button onClick={() => handleClick('/')} style={btn}>/</button>
        <button onClick={() => handleClick('*')} style={btn}>x</button>
        <button onClick={square} style={btn2}><TbSuperscript /></button>

        <button onClick={() => handleClick('7')} style={btn}>7</button>
        <button onClick={() => handleClick('8')} style={btn}>8</button>
        <button onClick={() => handleClick('9')} style={btn}>9</button>
        <button onClick={() => handleClick('-')} style={btn2}><HiMinusSmall /></button>

        <button onClick={() => handleClick('4')} style={btn}>4</button>
        <button onClick={() => handleClick('5')} style={btn}>5</button>
        <button onClick={() => handleClick('6')} style={btn}>6</button>
        <button onClick={() => handleClick('+')} style={btn}>+</button>

        <button onClick={() => handleClick('1')} style={btn} >1</button>
        <button onClick={() => handleClick('2')} style={btn}>2</button>
        <button onClick={() => handleClick('3')} style={btn}>3</button>

        <button onClick={() => calculate(inputValue)} className='border-2 p-1 row-span-2 rounded'>Enter</button>
        <button onClick={() => handleClick('0')} className='border-2 p-2 col-span-2 rounded'>0</button>
        <button onClick={() => handleClick('.')} style={btn}>.</button>
      </div>
    </div>
  </div>
)
}

export default App