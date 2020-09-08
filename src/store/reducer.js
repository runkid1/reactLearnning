import {
	CHANGE_INPUT,
	ADD_ITEM,
	DELETE_ITEM,
	GET_ROUTER_LIST,
} from '../store/actionTypes'
const defaultState = {
	inputValue: '',
	list: ['早上4点起床，锻炼身体', '中午下班游泳一小时'],
	routerList: [],
}
export default (state = defaultState, action) => {
	// console.log('state=', state)
	// console.log('action=', action)
	if (action.type === CHANGE_INPUT) {
		let newState = JSON.parse(JSON.stringify(state))
		newState.inputValue = action.value
		return newState
	}
	if (action.type === ADD_ITEM) {
		let newState = JSON.parse(JSON.stringify(state))
		newState.list.push(newState.inputValue)
		newState.inputValue = ''
		return newState
	}
	if (action.type === DELETE_ITEM) {
		let newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.value, 1)
		return newState
	}
	if (action.type === GET_ROUTER_LIST) {
		let newState = JSON.parse(JSON.stringify(state))
		newState.routerList = action.value
		console.log('newState.routerList=', newState.routerList)
		return newState
	}
	return state
}
