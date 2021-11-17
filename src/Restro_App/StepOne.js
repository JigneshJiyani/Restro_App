/* eslint-disable react/prop-types */
import React from 'react';
import {TextField,MenuItem,} from '@material-ui/core';


const StepOne = (props) => {
	const { selectedMeal, selectedPeople, setSelectedPeople, setSelectedMeal } = props;

	const mealHandleChange = (event) => {
		setSelectedMeal(event.target.value);
	}

	const peopleHandleChange = (event) => {
		setSelectedPeople(event.target.value);
	}

	const meals = [
		{value: 'breakfast',label: 'Breakfast',},
		{value: 'lunch',label: 'Lunch',},
		{value: 'dinner',label: 'Dinner',},
	];

	return (
		<>
			<TextField
						select
						label="Please select your meal"
						onChange={mealHandleChange}
						value={selectedMeal}
						variant="outlined"
						style={{ minWidth: 330, marginBottom: 20, marginTop: 20 }}>
						{meals.map((option) => (
						<MenuItem key={option.value} value={option.value}>
						{option.label}
						</MenuItem>
						))}
			</TextField>
			<br />
			<TextField
						select
						label="How many Guests?"
						required='required'
						onChange={peopleHandleChange}
						value={selectedPeople}
						variant="outlined"
						style={{ minWidth: 330 }}>
						<MenuItem value={"1"}>1</MenuItem>
						<MenuItem value={"2"}>2</MenuItem>
						<MenuItem value={"3"}>3</MenuItem>
						<MenuItem value={"4"}>4</MenuItem>
						<MenuItem value={"5"}>5</MenuItem>
						<MenuItem value={"6"}>6</MenuItem>
						<MenuItem value={"7"}>7</MenuItem>
						<MenuItem value={"8"}>8</MenuItem>
						<MenuItem value={"9"}>9</MenuItem>
						<MenuItem value={"10"}>10</MenuItem>
			</TextField>
			<br />
			<br />
		</>
	);
}

export default StepOne;