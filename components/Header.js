import React, {Component} from 'react';
import './css/Header.css';
import Navigation from './navigation';

class Header extends Component{
	render(){

		return(
				<div className="row">
				    <div className="col-12">
				    	<div className="row">
				    		<div className="col-12 nopadding">
				        		<div className="break_line_list">
						        	<div className="disp">Blog</div>
						        	<div className="disp">Nourish</div>
						        	<div className="disp">Shop</div>
				        		</div>
				        	</div>
				        </div>
				        <div className="row">
				    		<div className="col-12">
				    			<Navigation/>
				    		</div>
				    	</div>		
				    </div>
 				</div>
			)

	}
	
}

export default Header;