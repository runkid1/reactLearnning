import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Index.js'
import List from './List'

function AppRouter() {
	return (
		<Router>
			<ul>
				<li>
					<Link to="/">首页</Link>
				</li>
				<li>
					<Link to="/list/123">列表</Link>{' '}
				</li>
			</ul>
			<Route path="/" exact component={Index}></Route>
			<Route path="/List/:id" exact component={List} />
		</Router>
	)
}
export default AppRouter
