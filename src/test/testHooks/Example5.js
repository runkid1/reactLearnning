import React, { useReducer } from 'react'
import ShowArea from './Example4'
import Buttons from './Buttons'
import { Color } from './Color'

function Example5() {
	return (
		<div>
			<Color>
				<ShowArea />
				<Buttons />
			</Color>
		</div>
	)
}
export default Example5
