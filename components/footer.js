import React, {Component} from 'react';
import './css/footer.css';

class Footer extends Component{

	constructor(){
        super();
        this.state = {
            city:null,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        
        this.setState({
            city: event.target.value
        });
        
    }


	render() {

		return(
				<div className="row">
				    <div className="col-12 nopadding footer_bg">
				    	<div className="row">
				    		<div className="col-12">
				    			<div className="row center_disp">
				    				<div className="col-sm">
				    					<ul>
				    						<li className="footer_menu">Company</li>
				    						<li>About</li>
				    						<li>Contact Us</li>
				    						<li>Careers</li>
				    					</ul>
						    		</div>
						    		
						    	
				    				<div className="col-sm">
				    					<ul>
				    						<li className="footer_menu">Account</li>
				    						<li>Log In</li>
				    						<li>Create Account</li>
				    					</ul>
						    		</div>
						    		
						    	
				    				<div className="col-sm">
				    					<ul>
				    						<li className="footer_menu">Support</li>
				    						<li>Help Center</li>
				    						<li>Accessibility</li>
				    					</ul>
						    		</div>
						    	</div>	
				    		</div>
				    	</div>	
				    	<div className="row">
				    		<div className="col-12">
				    			<div className="disp_line"></div>
				    			<div className="social_media_icon">

				    				<div className="icon_disp"><img className="center_image" src={require('./images/youtube.png')}  /></div>
				    				<div className="icon_disp"><img className="center_image center_image_pinterest" src={require('./images/pinterest.png')} /></div>
				    				<div className="icon_disp"><img className="center_image center_image_fb" src={require('./images/facebook.png')} /></div>
				    				<div className="icon_disp"><img className="center_image" src={require('./images/twitter.png')} /></div>
				    				<div className="icon_disp"><img className="center_image" src={require('./images/instagram.png')} /></div>
				    			
				    			</div>
				    			<div className="disp_line"></div>
				    		</div>
				    	</div>	
				    	<div className="row">
				    		<div className="col-12 footer_disclaimer">
				    			<div className="row">
				    				<div className="col-sm-1">
				    					
				    					<select className="language" name="city" onChange={this.handleInputChange}>
                                        
                                        <option value="1">English</option>
                                        <option value="2">Spanish</option>
                                        <option value="3">French</option>
                                        <option value="4">Hindi</option>
                                        <option value="5">Urdu</option>
                                    	</select>

				    				</div>
				    				<div className="col-sm-10">
				    					<div className="disclaimer">
				    						<ul>
					    						<li>&copy; iFit.com. All Rights Reserved.</li>
					    						<li>Privacy Policy</li>
					    						<li>Terms of Use</li>
				    						</ul>	
				    					</div>
				    				</div>
				    				
				    			</div>
				    		</div>
				    	</div>	
				    </div>
				 </div>   
			)

	}

}	

export default Footer;