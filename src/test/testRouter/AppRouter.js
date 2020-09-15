import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Index.js'
import List from './List'
import Home from './Home'
{/* <Route path="/home/" component={Home} /> */}
class AppRouter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [
				{
					id: 123,
					title: '深夜食堂',
				},
				{
					id: 234,
					title: '深夜食堂2',
				},
				{
					id: 345,
					title: '深夜食堂3',
				},
			],
		}
	}
	render() {
		return (
			<Router>
				<ul>
					<li>
						<Link to="/">首页</Link>
					</li>
					<li>
						{this.state.list.map((item, index) => {
							return (
								<div key={item.id}>
									<Link to={'/list/' + item.id}>{item.title}</Link>
								</div>
							)
						})}
					</li>
				</ul>
        <Route path="/home/" component={Home} />
				<Route path="/" exact component={Index}></Route>
				<Route path="/List/:id" exact component={List} />
			</Router>
		)
	}
}

export default AppRouter
