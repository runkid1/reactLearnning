import React, { Component } from 'react'
import axios from 'axios'
// import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from '../store/actionTypes'
import TodoListUI from './TodoListUI'
import {
	changeInputAction,
	addItemAction,
	deleteItemAction,
} from '../store/actionCreate'
import store from '../store/index'
import './TodoList.css'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.changeInputValue = this.changeInputValue.bind(this)
		this.state = store.getState()
		this.storeChange = this.storeChange.bind(this)
		this.addItem = this.addItem.bind(this)
		this.deleteItem = this.deleteItem.bind(this)
		store.subscribe(this.storeChange)
	}
	componentDidMount() {
		axios
			.get(
				'https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList'
			)
			.then((res) => {
				console.log(res)
			})
	}
	storeChange() {
		this.setState(store.getState())
	}
	deleteItem(index) {
		console.log('deleteItem=', index)
		store.dispatch(deleteItemAction(index))
	}
	addItem() {
		store.dispatch(addItemAction())
	}
	changeInputValue(e) {
		store.dispatch(changeInputAction(e.target.value))
	}
	render() {
		return (
			<TodoListUI
				inputValue={this.state.inputValue}
				list={this.state.list}
				changeInputValue={this.changeInputValue}
				addItem={this.addItem}
				deleteItem={this.deleteItem}
			/>
		)
	}
}

export default TodoList
