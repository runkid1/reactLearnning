import React, { Component } from 'react'
import Buttons from './Buttons'
import ShowArea from './ShowArea'
import { Color } from './Color'
function Example() {
	return (
		<div>
			<Color>
				<Buttons></Buttons>
				<ShowArea></ShowArea>
			</Color>
		</div>
	)
}
export default Example
