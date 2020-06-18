import React, {Component} from 'react';
import './css/hero_text.css';

class Hero extends Component{
	constructor(props){
        super(props)
        this.state = {
            text: 'The best personal training,right in your own home'
        }
    }
    render()
    {
    	return(
            <div className="row">
                <div className="col-12 nopadding">
                    <div id="hero">
            			<div className="centered hero_text">{this.state.text}</div>
                        <div align="center"><button className="button button_disp">JOIN FIT COACH</button></div>
                     </div> 
                </div>
             </div>          

    		)
    }

}

export default Hero;