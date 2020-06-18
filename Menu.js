import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';

const Menu = () => {
	return(
		<div className="nav">
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/About">About</Link></li>
				<li><Link to="/ContactUs">Contact</Link></li>
			</ul>
		</div>	
		)
}

export default Menu;