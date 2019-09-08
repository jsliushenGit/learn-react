import React, {Component} from 'react'

export default class AddTask extends Component {
	render() {
		let taskValue = ''

		const handleClick = () => {
			this.props.handleClick(taskValue)
		}

		const handleChange = (e) => {
			taskValue = e.target.value
		}

		return (
			<div>
				<input onChange={handleChange}></input>
				<button onClick={handleClick}>添加</button>
			</div>
		)
	}
}