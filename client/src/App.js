import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {data: ""};

	async componentDidMount() {
		const data = await fetch("/api/course");
		this.setState({data: data});
	}

	render() {
		return (
			<div className="App">
				<h1>{this.state.data}</h1>
			</div>
		);
	}
}

export default App;
