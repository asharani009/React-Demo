import React, {Component} from 'react';

class Form extends Component{

	constructor(props){

		super(props);

		this.state = {fullname: "priyanka",
						lastname: "agarwal",
						email: "pagarwal08@gmail.com",
						message: "Hi"
					}
	}
	handlechange = (event) => {
		this.setState({[event.target.name]:event.target.value})
	}
	handlesubmit = (event) => {
		alert(JSON.stringify(this.state));
		event.preventDefault();
	}
	render(){

		return(
			<div>
				<form onSubmit={this.handlesubmit}>
				<p>
					<label>First Name</label>
					<input type="text" name="fullname" value={this.state.fullname} onChange={this.handlechange} />
				</p>
				<p>
					<label>Last Name</label>
					<input type="text" name="lastname" value={this.state.lastname} onChange={this.handlechange} />
				</p>
				<p>
					<label>Email address</label>
					<input type="email" name="email" value={this.state.email} onChange={this.handlechange} />
				</p>
				<p>
					<label>Message</label>
					<textarea name="message" value={this.state.message} onChange={this.handlechange}></textarea>
				</p>
				<p>
				<input type="Submit" value="submit" />
				</p>
				</form>
			</div>
		)
	}
}

export default Form;