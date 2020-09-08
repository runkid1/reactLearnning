import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
// class TodoListUI extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {}
// 	}
// 	render() {
// 		console.log('this.props=', this.props)
// 		return (
// 			<div>
// 				<Input
// 					className="inputL"
// 					value={this.props.inputValue}
// 					placeholder={this.props.inputValue}
// 					onChange={this.props.changeInputValue}
// 				/>
// 				<Button
// 					type="primary"
// 					onClick={this.props.addItem}
// 					style={{ marginLeft: '10px' }}
// 				>
// 					AddItem
// 				</Button>
// 				<List
// 					style={{ width: '250px', marginTop: '10px' }}
// 					bordered
// 					dataSource={this.props.list}
// 					renderItem={(item, index) => (
// 						<List.Item onClick={() => this.props.deleteItem(index)}>
// 							{item}
// 						</List.Item>
// 					)}
// 				/>
// 			</div>
// 		)
// 	}
// }

const TodoListUI = (props) => {
	console.log('props=', props)
	return (
		<div>
			<Input
				className="inputL"
				value={props.inputValue}
				placeholder={props.inputValue}
				onChange={props.changeInputValue}
			/>
			<Button
				type="primary"
				onClick={props.addItem}
				style={{ marginLeft: '10px' }}
			>
				AddItem
			</Button>
			<List
				style={{ width: '250px', marginTop: '10px' }}
				bordered
				dataSource={props.list}
				renderItem={(item, index) => (
					<List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>
				)}
			/>
		</div>
	)
}

export default TodoListUI
