import React, { useState,createContext,useContext } from 'react';

const CountContext=createContext()

function Count(){
  const count=useContext(CountContext)
  console.log("count=",count)
  return (<h2>{count}</h2>)
}
function TestUseContext(){
  const [count,setCount]=useState(0);
  return (
    <div>
      <p>you click {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
      <CountContext.Provider value={count}>
        <Count></Count>
      </CountContext.Provider>
    </div>
  )
}
export default TestUseContext