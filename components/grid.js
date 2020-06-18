import React, {Component} from 'react';
import './css/grid.css';

class Grid extends Component{

	render() {

		return(

			<div className="grid_display">
			<p className="grid_header">Interested in our exciting iFit-enabling equipment?</p>
				<div className="grid_container">
					<div className="container">
					  <div className="card-deck">
					    <div className="card" align="center">
					      <img className="card-img-top treadmill_img" src={require('./images/treadmill.png')} alt="treadmill"/>
					      <div className="card-body">
					        <h5 className="card-title">Treadmill</h5>
					      </div>
					    </div>
					    <div className="card" align="center">
					      <img className="card-img-top bikes_img" src={require('./images/bikes.png')} alt="bikes"/>
					      <div className="card-body">
					        <h5 className="card-title">Bikes</h5>					  
					      </div>
					    </div>
					    <div className="card" align="center">
					      <img className="card-img-top elip_strenth_img" src={require('./images/elliptical.png')} alt="elliptical"/>
					      <div className="card-body">
					        <h5 className="card-title">Ellipticals</h5>
					      </div>
					    </div>
					    <div className="card" align="center">
					      <img className="card-img-top elip_strenth_img" src={require('./images/strength.png')} alt="strength"/>
					      <div className="card-body">
					        <h5 className="card-title">Strength</h5>					   
					      </div>
					    </div>
					  </div>
					</div>
				</div>
			</div>

			)
	}
}

export default Grid;