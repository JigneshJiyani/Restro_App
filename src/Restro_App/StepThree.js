/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {Button,TextField,MenuItem,ButtonGroup} from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


const StepThree = (props) => {
	const { selectedDishItems, dish, setDish, qty, setQty, orderItems, setOrderItems } = props;

const handleChange = (event) => {
	setDish(event.target.value);
};

const addOrderItem = () => {
		const selectedItem = selectedDishItems.filter(item => item.id === dish);
		
		const Index = orderItems.findIndex(item => item.id === selectedItem[''].id);

		if (Index !== -1) {
		 [...orderItems];
		}
		else {
			setOrderItems([...orderItems, { id: selectedItem[0].id, dishName: selectedItem[0].name, dishQty: qty }])
		}

	};

const deleteOrderItem = (id) => {
		const availableOrderItems = orderItems.filter(item => item.id !== id);

	setOrderItems([...availableOrderItems]);
	};

return (
	<>
		<table border="5px" cellSpacing="5px" cellPadding="10px">
			<th>
				<tr>
					<td >Dish</td>
					<td align="right">Quantity</td>
					<td align="center">Action</td>
				</tr>
			</th>
		{orderItems.map((item) => {
		return (
			<tr key={item.id}>
				<td>{item.dishName}</td>
				<td>{item.dishQty}</td>
			<td>	
				<IconButton onClick={() => deleteOrderItem(item.id)}>
				<DeleteIcon/>
				</IconButton>
			</td>
			</tr>
			);
				})}
		</table>
				<br />
			<TextField
						select
						label="Select Dish"
						value={dish}
						onChange={handleChange}
						variant="outlined"
						required='required'
						style={{ minWidth: 330 }}>
						{selectedDishItems.map((option) => {
		return (
			<MenuItem key={option.id} value={option.id}>
			{option.name}
			</MenuItem>)})}
			</TextField>
			<br />
			<br />
			<ButtonGroup size="small">
				<Button onClick={() => setQty(qty - 1)}>-</Button>
				<Button >{qty}</Button>
				<Button onClick={() => setQty(qty + 1)}>+</Button>
			</ButtonGroup>
			<Button
				variant="outlined"
				style={{ marginLeft: 90 }}
				startIcon={<AddIcon/>}
				onClick={() => addOrderItem()}>
						Add Dish
			</Button>
			<br />
			<br />
			<br />
		</>
	);
}

export default StepThree;
