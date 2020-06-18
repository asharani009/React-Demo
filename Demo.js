import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = (props) => {

		return <div className="maindiv">
				<h1>Hello {props.name}</h1>
				<p>Where do you live?</p>
			</div>	
}

export default Demo;