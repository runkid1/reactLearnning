import {
	CHANGE_INPUT,
	ADD_ITEM,
	DELETE_ITEM,
	GET_ROUTER_LIST,
} from './actionTypes'
import axios from '../axiosIntercept/axios'
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

export const getTodoList = () => {
	return () => {
		axios
			.get(
				'https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList'
			)
			.then((res) => {
				const data = res.data
				console.log(data)
			})
	}
}
