import React, {Component} from 'react';
import './css/navigation.css';

class Navigation extends Component{
	render(){

		return(
				<div className="row">
				    <div className="col-3">
				    	<div id="backgroundImage"></div>
				    </div>
				    <div className="col-7">
					    <input className="menu-btn" type="checkbox" id="menu-btn" />
	  					<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
				    	
	  				
				    	<ul className="menu">
				    		<li className="nav_disp">EXERCISE</li>
				    		<li className="nav_disp">NUTRITION</li>
				    		<li className="nav_disp">ACTIVITY</li>
				    		<li className="nav_disp">SLEEP</li>
				    	</ul>
				    
				    </div>
				    <div className="col-2">
				    	<div align="right" className="navbar_button"><button className="button">SIGN UP</button></div>
				    </div>
 				</div>
			)

	}
	
}

export default Navigation;