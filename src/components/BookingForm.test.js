import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the form labels', () => {
    const props = {
		date: "2025-03-10",
		time: "8:00",
		guests: "1",
		occasion: "birthday",
		availableTimes: ["8:00", "9:00"],
		changeField: jest.fn(),
		submitHandler: jest.fn(),
		currentDate:"2025-03-10",
		isFormValid: true,
		errors: {date:"",time:"",guests:"",occasion:""}
	}
	render(<BookingForm {...props}/>);
    const dateLabel = screen.getByText("Choose date");
	const timeLabel = screen.getByText("Choose time");
	const guestsLabel = screen.getByText("Number of guests");
	const ocassionLabel = screen.getByText("Occasion");

    expect(dateLabel).toBeInTheDocument();
	expect(timeLabel).toBeInTheDocument();
	expect(guestsLabel).toBeInTheDocument();
	expect(ocassionLabel).toBeInTheDocument();
})

test('Verifies the form elements have the correct attributes', () => {
	const props = {
		date: "2025-03-10",
		time: "8:00",
		guests: "1",
		occasion: "birthday",
		availableTimes: ["8:00", "9:00"],
		currentDate:"2025-03-10",
		isFormValid: false,
		errors: {date:"There is an error in the date",time:"",guests:"",occasion:""}
	};
	const changeField = jest.fn();
	const submitHandler = jest.fn();

	render(<BookingForm {...props} changeField={changeField} submitHandler={submitHandler}/>);
	
	const dateInput = screen.getByLabelText(/Choose date/);
	const dateError = screen.getByText("There is an error in the date");
	const timeInput = screen.getByLabelText(/Choose time/);
	const guestsInput = screen.getByLabelText(/Number of guests/);
	const occasionInput = screen.getByLabelText(/Occasion/);
	const submitButton = screen.getByText("Make Your Reservation");

	expect(dateInput).toHaveAttribute('required');
	expect(dateInput).toHaveAttribute('min','2025-03-10');
	expect(dateInput).toHaveAttribute('value','2025-03-10');
	expect(dateError).toBeInTheDocument();
	expect(timeInput).toHaveAttribute('required');
	expect(guestsInput).toHaveAttribute('required');
	expect(guestsInput).toHaveAttribute('min', '1');
	expect(guestsInput).toHaveAttribute('max','10');
	expect(occasionInput).toBeInTheDocument();
	expect(submitButton).toHaveAttribute('type','submit');
	expect(submitButton).toHaveAttribute('disabled');

	fireEvent.change(dateInput,{target:{value:"2025-03-11"}});
	expect(changeField).toHaveBeenCalled();

	fireEvent.click(submitButton);
	expect(submitHandler).not.toHaveBeenCalled();
})