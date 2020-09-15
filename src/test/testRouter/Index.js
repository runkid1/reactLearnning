import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
class Index extends Component {
	constructor(props) {
		super(props)
    this.setState = {}
    this.props.history.push("/home/")
	}
	render() {
		return (<h2>我是Index</h2>)
	}
}
export default Index
