import React, { Component } from "react"

export default class Foo extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {}
	}

	render() {
		return (
			<div style={{ 
				margin: '10px', 
				padding: '50px', 
				background: 'red',
				color: 'white'}}
			>
				You clicked
			</div>
		)
	}
}