import React, { Component } from 'react'

class List extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentDidMount() {
		console.log('props=', this.props.match)
	}
	render() {
		return <h2>List 页面</h2>
	}
}

export default List
