import React, {Component} from 'react';
import './App.css';

class App extends Component {
	state = {
		data: "",
		loaded: false,
	};

	async componentDidMount() {
		await this.getData();
	}

	getData = async () => {
		this.setState({loaded: false});
		fetch("/api/course")
			.then(res => res.json())
			.then(data => {
				console.log(data);
				return data;
			})
			.then(data => this.setState({loaded: true, data}))
			.catch(e => console.log(e));
	};

	render() {
		return (
			<div className="App">
				{
					this.state.loaded ?
						<h1>{this.state.data}</h1>
						: <h1>{"isLoaded"}</h1>
				}
			</div>
		);
	}
}

export default App;
