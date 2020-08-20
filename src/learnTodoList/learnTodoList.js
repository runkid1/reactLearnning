import React, { Component } from 'react'
import store from '../learnStore/index.js'
class learnTodoList extends Component {
	constructor(props) {
		super(props)
		console.log(store.getState())
		this.state = store.getState()
		// 只要store的状态改变就会触发(要通过事件获取reducer中的数据,多个数据时也只使用一个)
		store.subscribe(this.handleStoreChange)
	}
	render() {
		return (
			<div>
				<input value={this.state.inputValue} onChange={this.handleChange} />
				<button onClick={this.handleAdd}>添加</button>
				<div>
					{this.state.list.map((value, index) => {
						return (
							<div
								onClick={() => {
									this.handleDelete(index)
								}}
								key={index}
							>
								{value}
							</div>
						)
					})}
				</div>
			</div>
		)
	}
	handleChange = (e) => {
		const action = {
			type: 'inputChange',
			value: e.target.value,
		}
		store.dispatch(action)
	}
	handleStoreChange = () => {
		this.setState(store.getState())
	}
	handleAdd = () => {
		const action = {
			type: 'addItem',
			value: this.state.inputValue,
		}
		store.dispatch(action)
	}
	handleDelete = (index) => {
		const action = {
			type: 'deleteItem',
			index,
		}
		store.dispatch(action)
	}
}
export default learnTodoList
