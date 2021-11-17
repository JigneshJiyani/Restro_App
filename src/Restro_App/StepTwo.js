/* eslint-disable react/prop-types */
import React from 'react';
import {TextField,MenuItem,} from '@material-ui/core';

const StepTwo = (props) => {
	const { selectedRestaurant, setSelectedRestaurant } = props;

const handleChange = (event) => {
	setSelectedRestaurant(event.target.value);
	};

	return (
		<>
		<TextField 
			select 
			label="Select Restaurant" 
			value={selectedRestaurant} 
			onChange={handleChange}
			variant="outlined" style={{ minWidth: 330, marginBottom: 20, marginTop: 30 }}>
			{props.availableRestaurant.map((option) => (
		<MenuItem key={option} value={option}>{option}</MenuItem>))}
		</TextField>
			<br/>
			<br/>
			<br/>
			<br/>
		</>
	);
}

export default StepTwo;