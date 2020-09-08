import {
	CHANGE_INPUT,
	ADD_ITEM,
	DELETE_ITEM,
	GET_ROUTER_LIST,
} from './actionTypes'
export const changeInputAction = (value) => ({
	type: CHANGE_INPUT,
	value,
})
export const addItemAction = () => ({
	type: ADD_ITEM,
})

export const deleteItemAction = (value) => ({
	type: DELETE_ITEM,
	value,
})
export const getRouterList = (value) => ({
	type: GET_ROUTER_LIST,
	value,
})
