import React, { Component } from 'react'
import Media from './Media'
import Video from './Video'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/share" component={Video} />
						<Route path="/watch" component={Media} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;