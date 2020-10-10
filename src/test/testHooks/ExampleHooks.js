import React, { useState } from 'react'

function Example() {
	const [sex, setSex] = useState('男')
	const [count, setCount] = useState(0)
	const [job, setJob] = useState('前端开发')
	return (
		<div>
			<p>You click {count} times</p>
			<p>性别：{sex}</p>
			<p>work:{job}</p>
			<button
				onClick={() => {
					setCount(count + 1)
				}}
			>
				click me
			</button>
		</div>
	)
}
export default Example
