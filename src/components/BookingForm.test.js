import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the form labels', () => {
    const props = {
		date: "2025-03-07",
		time: "8:00",
		guests: "1",
		occasion: "birthday",
		availableTimes: ["8:00", "9:00"],
		changeHandler: jest.fn()
	}
	render(<BookingForm {...props}/>);
    const dateLabel = screen.getByText("Choose date");
	const timeLabel = screen.getByText("Choose time");
	const guestsLabel = screen.getByText("Number of guests");
	const ocassionLabel = screen.getByText("Occasion");
	const timeSelect = screen.getByDisplayValue("8:00");

    expect(dateLabel).toBeInTheDocument();
	expect(timeLabel).toBeInTheDocument();
	expect(guestsLabel).toBeInTheDocument();
	expect(ocassionLabel).toBeInTheDocument();
	expect(timeSelect).toBeInTheDocument();
})