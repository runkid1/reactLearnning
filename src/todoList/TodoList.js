import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from '../store/actionTypes'
import {
	changeInputAction,
	addItemAction,
	deleteItemAction,
} from '../store/actionCreate'
import store from '../store/index'
import 'antd/dist/antd.css'
import './TodoList.css'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.changeInputValue = this.changeInputValue.bind(this)
		this.state = store.getState()
		this.storeChange = this.storeChange.bind(this)
		this.addItem = this.addItem.bind(this)
		store.subscribe(this.storeChange)
	}
	storeChange() {
		this.setState(store.getState())
	}
	deleteItem(index) {
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
			<div>
				<Input
					className="inputL"
					value={this.state.inputValue}
					placeholder={this.state.inputValue}
					onChange={this.changeInputValue}
				/>
				<Button
					type="primary"
					onClick={this.addItem}
					style={{ marginLeft: '10px' }}
				>
					AddItem
				</Button>
				<List
					style={{ width: '250px', marginTop: '10px' }}
					bordered
					dataSource={this.state.list}
					renderItem={(item, index) => (
						<List.Item onClick={this.deleteItem.bind(this, index)}>
							{item}
						</List.Item>
					)}
				/>
			</div>
		)
	}
}

export default TodoList
