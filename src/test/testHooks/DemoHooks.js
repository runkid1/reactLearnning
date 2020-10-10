import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
  useEffect(()=>{
    console.log('useEffect=>老弟，你来了！Index页面')
    return ()=>{
      console.log('老弟，你走了!Index页面')
    }
  },[])
	return <h2>Index</h2>
}

function List() {
  useEffect(()=>{
    console.log('useEffect=>老弟，你来了！List页面')
    return ()=>{
      console.log('老弟，你走了!List页面')
    }
  },[])
	return <h2>List</h2>
}

function DemoHooks() {
	const [count, setCount] = useState(0)
	useEffect(() => {
    console.log(`useEffect you click ${count}`)
    return ()=>{
      console.log("===================")
    }
	},[count])
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
			<Router>
				<ul>
					<li>
						<Link to="/">index</Link>{' '}
					</li>
					<li>
						<Link to="/list">List</Link>{' '}
					</li>
				</ul>
				<Route path="/" exact component={Index} />
				<Route path="/list" component={List} />
			</Router>
		</div>
	)
}

export default DemoHooks