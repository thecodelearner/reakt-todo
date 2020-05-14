import React, { Component } from 'react'

export class AddTodo extends Component {

	state = {
		content: ''

	}

	handleChange = (e) => {
		this.setState({
			content: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state);

		this.setState({
			content: ''
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Add new todo & Tap todo to delete it</label>
						<input type="text" onChange={this.handleChange} value={this.state.content} />
					</div>
				</form>
			</div>
		)
	}
}

export default AddTodo
