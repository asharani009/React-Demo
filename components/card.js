import React, {Component} from 'react';
import './css/card.css';

class Card extends Component{

	render() {

		return(

			<div className="card_container">
				<div className="container">
				  <div className="card-deck">
				    <div className="card">
				      <img className="card-img-top" src={require('./images/card1.png')} alt="Card image"/>
				      <div className="card-body">
				      	<div className="clearfix">
				      		<div className="card_snapshot">  <img src={require('./images/card-1_small.png')} alt="Card Snapshot"/></div>
				        	<div className="card_title_text card-title">Lake Inniscarra, Ireland- Pyramid</div>

				        </div>
				        <p className="icon_text"><span className="icon_spacing"><img src={require('./images/time.png')} alt="time"/>&nbsp; 30:53</span><span><img src={require('./images/distance.png')} alt="distance"/>&nbsp;6.248M</span></p>
				        <p className="card-link">View Details</p>
				      </div>
				    </div>
				    <div className="card">
					    <div className="image_container_overlay">
					      <img className="card-img-top" src={require('./images/card2.png')} alt="Card image cap"/>
					      <div className="after">
					      	<div className="overlay_content">
					     		<h3>9</h3>
					     		<div className="overlay_txt">
					     			WORKOUTS
					     		</div>
					     		<img src={require('./images/playlist.png')} />
					     	</div>	
					     </div>	
					    </div>  
				      <div className="card-body">
				        <div className="clearfix">
				      		<div className="card_snapshot">  <img src={require('./images/card2_small.png')} alt="Card Snapshot"/></div>
				        	<div className="card_title_text card-title">Performance Series</div>
				        </div>
				      </div>
				    </div>
				    <div className="card">
				      <img className="card-img-top" src={require('./images/card3.png')}/>
				      <div className="card-body">
				        <div className="clearfix">
				      		<div className="card_snapshot">  <img src={require('./images/card3_small.png')} alt="Card Snapshot"/></div>
				        	<div className="card_title_text card-title">Slow Pulls and Fast Intervals</div>
				        </div>
				        <p className="icon_text">
				        <span className="icon_spacing"><img src={require('./images/time.png')} alt="time"/>&nbsp; 44:13</span>
				        <span><img src={require('./images/distance.png')} alt="distance"/>&nbsp; 9,948M</span></p>
				        
				      </div>
				    </div>
				    <div className="card">
				     <div className="image_container_overlay">
				      <img className="card-img-top" src={require('./images/card4.png')}/>
				      <div className="after">
					      	<div className="overlay_content">
					     		<h3>12</h3>
					     		<div className="overlay_txt">
					     			WORKOUTS
					     		</div>
					     		<img src={require('./images/playlist.png')} />
					     	</div>	
					     </div>	
					    </div>  
				      <div className="card-body">
				       <div className="clearfix">
				      		<div className="card_snapshot">  <img src={require('./images/card4_small.png')} alt="Card Snapshot"/></div>
				        	<div className="card_title_text card-title">20 Minutes to Toned</div>
				        </div>
				      </div>
				    </div>
				    <div className="card">
				      <img className="card-img-top" src={require('./images/card5.png')}/>
				      <div className="card-body">
				       <div className="clearfix">
				      		<div className="card_snapshot">  <img src={require('./images/card5_small.png')} alt="Card Snapshot"/></div>
				        	<div className="card_title_text card-title">Charles Race, Boston, massachusetts</div>
				        </div>
				        <p className="icon_text">
				        <span className="icon_spacing"><img src={require('./images/time.png')} alt="time"/>&nbsp; 36:22</span>
				        <span><img src={require('./images/distance.png')} alt="distance"/>&nbsp; 8,648M</span></p>
				      </div>
				    </div>
				    <div className="card">
				     <div className="image_container_overlay">
				      <img className="card-img-top" src={require('./images/card6.png')}/>
				      <div className="after">
					      	<div className="overlay_content">
					     		<h3>12</h3>
					     		<div className="overlay_txt">
					     			WORKOUTS
					     		</div>
					     		<img src={require('./images/playlist.png')} />
					     	</div>	
					     </div>	
					    </div>  
				      <div className="card-body">
				       <div className="clearfix">
				      		<div className="card_snapshot">  <img src={require('./images/card6_small.png')} alt="Card Snapshot"/></div>
				        	<div className="card_title_text card-title">Full Body HIIT Series</div>
				        </div>
				      </div>
				    </div>
				    <div className="card">
				      <img className="card-img-top" src={require('./images/card7.png')}/>
				      <div className="card-body">
				       <div className="clearfix">
				      		<div className="card_snapshot">  <img src={require('./images/card7_small.png')} alt="Card Snapshot"/></div>
				        	<div className="card_title_text card-title">Kafue River, Zambia-Power Stroke Pyramid</div>
				        </div>
				         <p className="icon_text">
				        <span className="icon_spacing"><img src={require('./images/time.png')} alt="time"/>&nbsp; 22:22</span>
				        <span><img src={require('./images/distance.png')} alt="distance"/>&nbsp; 4,660M</span></p>
				      </div>
				    </div>
				    <div className="card">
				    <div className="image_container_overlay">
				      <img className="card-img-top" src={require('./images/card8.png')}/>
				     <div className="after">
					      	<div className="overlay_content">
					     		<h3>16</h3>
					     		<div className="overlay_txt">
					     			WORKOUTS
					     		</div>
					     		<img src={require('./images/playlist.png')} />
					     	</div>	
					     </div>	
					    </div>   
				      <div className="card-body">
				       <div className="clearfix">
				      		<div className="card_snapshot">  <img src={require('./images/card8_small.png')} alt="Card Snapshot"/></div>
				        	<div className="card_title_text card-title">Shed &amp; Burn Series</div>
				        </div>
				      </div>
				    </div>

				  </div>
				</div>
			</div>

			)
		}
}

export default Card;