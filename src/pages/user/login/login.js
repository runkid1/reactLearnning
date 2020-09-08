import React, { Component } from 'react'
import { getRouterList } from '../../../store/actionCreate'
import store from '../../../store/index'
import { Form, Input, Button, Checkbox } from 'antd'
import axios from '../../../axiosIntercept/axios'

import './login.css'
const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
}
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16,
	},
}

const Login = () => {
	const onFinish = (values) => {
		axios
			.post('http://49.234.154.59:3002/api/platform/login', { ...values })
			.then((res) => {
				console.log('Login==res.res=', res)
				if (res.code == 0) {
					store.dispatch(getRouterList(res.data.resList))
				}
			})
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<div className="login">
			<div className="loginCenter">
				<Form
					{...layout}
					name="basic"
					// initialValues={{
					// 	remember: true,
					// }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								message: 'Please input your username!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					{/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item> */}

					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}

export default Login
