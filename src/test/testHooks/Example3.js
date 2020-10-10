import React, { useState, createContext,useContext } from 'react'
const CountContext = createContext()

function Example3() {
	const [count, setCount] = useState(0)
	return (
		<div>
			<p>you click {count}次</p>
			<button
				onClick={() => {
					setCount(count + 1)
				}}
			>
				click
			</button>
      <CountContext.Provider value={count}>
        <Counter></Counter>
      </CountContext.Provider>
		</div>
	)
}

function Counter(){
  const count=useContext(CountContext)
  return (<h2>我是Counter======{count}</h2>)
}

export default Example3
