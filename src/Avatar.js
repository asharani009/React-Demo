import React, {Component} from 'react';
import AvatarList from './AvatarList';
import './Demo.css';

class Avatar extends Component{

	constructor(){
		super();
		this.state = {
			name:"Welcome to react world"
		}
	}

	nameChange(){
		this.setState({
			name:"Subscribe to react"
		})
	}
		render(){

			const Avatarlistarray=[
		{
			id:1,
			name:"priyanka",
			work:"Web"
		},
		{
			id:2,
			name:"priya",
			work:"Developer"
		},
		{
			id:1,
			name:"abhi",
			work:"Designer"
		},
		{
			id:1,
			name:"vivaan",
			work:"Engineer"
		}

	]

	const arraylist= Avatarlistarray.map( (avatarcard, i) => {

		return <AvatarList key={i} id={Avatarlistarray[i].name}
				name={Avatarlistarray[i].name}
				work={Avatarlistarray[i].work} />
	})

			return ( <div>
			<h1 className="disp-text"> {this.state.name}</h1>
			<div className="display">
				{arraylist}
			</div>	
			<p className="disp-text"><button onClick = { () => this.nameChange()}>Subscribe</button></p>
			</div>
			)	
		}
	}

export default Avatar;