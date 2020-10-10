import React, { useReducer } from 'react';

function ReducerDemo(){
  const [count,dispatch]=useReducer((state,action)=>{
    switch(action){
      case "add":
        return state+1;
      case "ins":
        return state-1
      default:
        return state
    }
  },0)
  return (
    <div>
      <h2>玩家数量{count}</h2>
      <button onClick={()=>dispatch('add')}>add</button>
      <button onClick={()=>dispatch('ins')}> ins</button>
    </div>
  )
}

export default ReducerDemo;