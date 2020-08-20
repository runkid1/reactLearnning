// 相当于仓库
const defaultState = {
	inputValue: 'hello world',
	list: [],
}
/* state指store中的数据 */
export default (state = defaultState, action) => {
	console.log(action)
	if (action.type === 'inputChange') {
		//解构复制一份
		let newState = { ...state }
		newState.inputValue = action.value
		return newState
	}
	if (action.type === 'addItem') {
		//解构复制一份
		let newState = { ...state }
		newState.list.push(action.value)
		newState.inputValue = ''
		return newState
	}
	if (action.type === 'deleteItem') {
		let newState = { ...state }
		newState.list.splice(action.index, 1)
		return newState
	}
	return state
}
