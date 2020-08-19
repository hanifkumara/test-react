import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './View/Home';
import About from './View/About';
import Tours from './View/Tours';

function App() {
	return (
		<BrowserRouter>
			<Route exact path="/">
				<Navbar />
				<Home />
			</Route>
			<Route path="/about">
				<Navbar />
				<About />
			</Route>
			<Route path="/tours">
				<Navbar />
				<Tours />
			</Route>
		</BrowserRouter>
	);
}

export default App;
