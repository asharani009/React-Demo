import React, {Component} from 'react';

const DisplayData = (props) => {
  return (
    <div>
    	<h2>API Data</h2>
    	<p>Symbol: {props.data.symbol}</p>
    	<p>Sector:  {props.data.sector}</p>
		<p>SecurityType: {props.data.securityType}</p>
		<p>BidPrice: {props.data.bidPrice}</p>
		<p>BidSize: {props.data.bidSize}</p>
		<p>AskPrice: {props.data.askPrice}</p>
		<p>AskSize: {props.data.askSize}</p>
		<p>LastUpdated: {props.data.lastUpdated}</p>
		<p>LastSaleSize: {props.data.lastSaleSize}</p>
		<p>LastSaleTime: {props.data.lastSaleTime}</p>
		<p>Volume: {props.data.volume}</p>
    </div>
  );
};

export default DisplayData;
