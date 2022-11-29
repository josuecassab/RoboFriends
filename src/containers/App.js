import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/searchBox';
import './App.css';
import Scroll from '../components/Scroll';
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));	
	} 

	onSearchEvent = (event) => {
		this.setState({searchfield:event.target.value})
		
	}

	render() {
		const filteredRobots = this.state.robots.filter( r => {
			return r.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
			})
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className=''>
					<div className='flex flex-col items-center gap-y-4 py-4'>
						<h1 className='text-4xl'>Robo Friends</h1>
						<SearchBox searchChange = {this.onSearchEvent}/>
					</div>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			)
		}

	}
}
export default App