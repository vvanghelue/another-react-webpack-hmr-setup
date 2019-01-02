import React, { Component } from "react"
import ReactDOM from "react-dom"
import Foo from "./Foo"
import { hot } from 'react-hot-loader'

class Main extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
	  	hasClicked: false
	  }
	}

	render() {
		return (
			<div>
				<button onClick={() => this.setState({ hasClicked: true }) }>Click me</button>
				{ this.state.hasClicked ? <Foo/> : null }
			</div>
		)
	}
} 

const App = hot(module)(Main)

document.addEventListener('DOMContentLoaded', (e) => {
  ReactDOM.render(<App />, document.getElementById("root"))
})