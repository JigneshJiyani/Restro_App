/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
import React from 'react';
import {Stepper,Step,StepLabel} from '@material-ui/core';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Review from './Review';
import {useForm} from "react-hook-form";

const dishesJson = require('../dishes.json');


function getSteps() {
	return ['Meal & Peoples', 'Restro', 'Servings', 'Review'];
}

export default function MainPage() {

	const [selectedMeal, setSelectedMeal] = React.useState('');
	const [selectedPeople, setSelectedPeople] = React.useState('');
	const [availableRestaurant, setRestaurant] = React.useState('');
	const [selectedRestaurant, setSelectedRestaurant] = React.useState('');
	const [activeStep, setActiveStep] = React.useState(0);
	const [selectedDishItems, setDishItems] = React.useState(dishesJson.dishes);
	const [dish, setDish] = React.useState('');
	const [qty, setQty] = React.useState(1);
	const [orderItems, setOrderItems] = React.useState([]);

	const methods = useForm({
		defaultValues: {
			restaurant: "",
			meal: "",
			people: "",
			dish: "",
		},
	});
	const steps = getSteps();
	const handleNext = () => {

	switch (activeStep) {
	
	case 0:
		
		const updatedMeal = selectedDishItems.filter(item => item.availableMeals.includes(selectedMeal));
		
		setDishItems(updatedMeal);

		let Restro = []

				for (let item in updatedMeal) {
					if (!Restro.includes(updatedMeal[item].restaurant)) {
						Restro.push(updatedMeal[item].restaurant);
					}
				}
		setRestaurant(Restro);

		setActiveStep((preStep) => preStep + 1);
				break;

	case 1:

		const updateDishes = selectedDishItems.filter(item => item.restaurant.includes(selectedRestaurant));
				
		setDishItems(updateDishes);
		
		setActiveStep((preStep) => preStep + 1);
				break;

	case 2:
	
		if (orderItems.length) {
		setActiveStep((preStep) => preStep + 1);
		} else {
		alert('Please Fill at least One Item')
		}
				break;

	case 3:
				
		setActiveStep((preStep) => preStep + 1);
				break;
			
	default:
		
		}
	};

	const handleBack = () => {
		setActiveStep((preStep) => preStep - 1);
	};

	const getStepContent = (step) => {
		switch (step) {
			case 0:
				return <StepOne
					selectedMeal={selectedMeal}
					setSelectedMeal={setSelectedMeal}
					setSelectedPeople={setSelectedPeople}
					selectedPeople={selectedPeople}/>;
			case 1:
				return <StepTwo
					availableRestaurant={availableRestaurant}
					selectedRestaurant={selectedRestaurant}
					setSelectedRestaurant={setSelectedRestaurant}/>;
			case 2:
				return <StepThree
					selectedDishItems={selectedDishItems}
					orderItems={orderItems}
					setOrderItems={setOrderItems}
					dish={dish}
					setDish={setDish}
					qty={qty}
					setQty={setQty}/>;
			case 3:
				return <Review
					selectedMeal={selectedMeal}
					selectedPeople={selectedPeople}
					selectedRestaurant={selectedRestaurant}
					dish={dish}
					qty={qty}
					orderItems={orderItems}/>;
			default:
				return 'Unknown step';
		}
	}

    return (
        <div>
        <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((step, index) => 
        {
        return (
            <Step key={index}> <StepLabel>{step}</StepLabel> </Step>
        );})}
        </Stepper>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {activeStep === steps.length ? (
            <div style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center' }}>
            <img src="Images/namaste.jpg" height="50px"/>
            <h2>Thanks for Order!</h2>
            <img src="Images/namaste.jpg" height="50px"/>
            <br/>
            <br/>
            </div>
            ) : (
            <div>
            <form onSubmit={methods.handleSubmit(handleNext)}>
            {getStepContent(activeStep)}
            <div>
                <center>
                <button style={{ marginRight: 90 }} onClick={handleBack}>Back</button>
                <button style={{ marginLeft: 90 }}>{activeStep === steps.length - 1 ? "Finish" : "Next"}
                </button>
                </center>
            </div>
            </form>
            </div>
            )}
            </div>
            </div>
        );
    }