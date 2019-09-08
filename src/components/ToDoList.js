import React, { Component } from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'

export default class ToDoList extends Component {
	constructor () {
		super()
		this.state = {
			list: [
				'react',
				'node',
				'serverless'
			]
		}
	}

	handleClick = val => {
		this.setState({
			list: this.state.list.push(val)
		})
	}

	render() {
		return (
			<div>
				<TaskList list={this.state.list}></TaskList>
				<AddTask handleClick={this.handleClick}></AddTask>
			</div>
		)
	}
}