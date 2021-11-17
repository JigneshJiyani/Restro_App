/* eslint-disable react/prop-types */
import React from 'react';

const Review = (props) => {

const { selectedMeal, selectedPeople, selectedRestaurant, orderItems } = props;

return (
	<div>
		<div>
			<center>
			<h2>Order Summary</h2>			
			<h4>of your Meal</h4>
			
			<table border="5px" cellSpacing="5px" cellPadding="10px">
			<tr>
				<td>Meal</td>
				<td align="right" >{selectedMeal}</td>
			</tr>
			<tr>
				<td>No of People</td>
				<td align="right" >{selectedPeople}</td>
			</tr>
			<tr>
				<td>Restaurant</td>
				<td align="right">{selectedRestaurant}</td>
			</tr>
			<tr>
				<th>Dish</th>
				<th>Quantity</th>
			</tr>
			{orderItems.map((item) => {
			return (
			<tr key={item.id}>
			<td >{item.dishName}</td>
			<td align="right">{item.dishQty}</td>
			</tr>
			);})}
			</table>
				<br/>
				<br/>
			</center>
			</div>
		</div>
	);
}


export default Review;