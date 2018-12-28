import React, {Component} from 'react';

class App extends Component {
	state = {
		data: "",
		loaded: false,
	};

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		this.setState({loaded: false});
		fetch("/api/course")
			.then(res => res.json())
			.then(data => this.setState({loaded: true, data: data.here}))
			.catch(e => {
				console.log(e);
				this.setState({loaded: true, data: "not here..."});
			});
	};

	render() {
		return (
			<div>
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
