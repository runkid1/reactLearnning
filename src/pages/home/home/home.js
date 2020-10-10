import React, { Component } from 'react'
import './home.scss'
import { Menu, Breadcrumb, Divider } from 'antd'
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
const { SubMenu } = Menu

class SiderHome extends Component {
	handleClick = (e) => {
		console.log('click ', e)
	}
	render() {
		return (
			<div>
				<Menu
					className="heightPreC100"
					onClick={this.handleClick}
					style={{ width: 256 }}
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
				>
					<SubMenu
						key="sub1"
						title={
							<span>
								<SettingOutlined />
								<span>用户管理</span>
							</span>
						}
					>
						<Menu.Item key="1">集客魔方卖家管理</Menu.Item>
						<Menu.Item key="2">集客魔方买家管理</Menu.Item>
						<Menu.Item key="3">将军令用户管理</Menu.Item>
					</SubMenu>
					<Menu.Item key="sub2" icon={<AppstoreOutlined />}>
						供应商列表
					</Menu.Item>
				</Menu>
				<Breadcrumb>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>
						<a href="">Application Center</a>
					</Breadcrumb.Item>
					<Breadcrumb.Item>
						<a href="">Application List</a>
					</Breadcrumb.Item>
					<Breadcrumb.Item>An Application</Breadcrumb.Item>
				</Breadcrumb>
			</div>
		)
	}
}
export default SiderHome
