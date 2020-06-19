import React, {Component} from 'react';
import DisplayData from './display_data';

class RequestData extends Component{
	constructor(props){
		super(props);

		this.state={
			symbol:'',
		    items: [],
		    noData:true
		}
	}

	handleChange = (event) => {
		this.setState({symbol:event.target.value});
	}
	handleSubmit = (event) => {

		let query= this.state.symbol;
		let endpoint = `https://cloud.iexapis.com/stable/tops?token=sk_425f10e06f3841a3bebe5929afce0557&symbols=${query}`;
	
		fetch(endpoint)
        .then(res => res.json())
        .then((data) => {
          if(!data.length)
          { 
          	this.setState({noData:true })
          }
          else
          {
          	this.setState({ items: data, noData:false })
      	  }
        })
        .catch(error => console.log(error))
     }



	render()
	{
		return(
			<div>
				<p>
					Symbol: <input type="text" id="symbol" onChange={this.handleChange} />  <button onClick={ this.handleSubmit }>Submit</button>
				</p>

				{this.state.items.length > 0 && this.state.items.map(item => (
					<DisplayData key={item.symbol} data={item}/>
				))}	
			</div>

			)

			if(this.state.noData){
				return <p> No data return</p>
			}
	}
}

export default RequestData;