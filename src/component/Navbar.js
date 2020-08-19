import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div class="container">
			<div class="row">
				<nav className="navbar navbar-expand-lg navbar-dark">
					<Link className="navbar-brand" to="/">
						Navbar
					</Link>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item">
								<Link class="nav-link" to="/">
									Home
								</Link>
							</li>
							<li class="nav-item">
								<Link className="nav-link" to="/about">
									About
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/tours">
									Tours
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
