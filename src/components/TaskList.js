import React, { Component } from 'react'

export default class TaskList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: props.list
		}
	}

	render() {
		return (
			<ul>
				{this.state.list.map((task, key) => <li key={key}>{task}</li>)}
			</ul>
		)
	}
}