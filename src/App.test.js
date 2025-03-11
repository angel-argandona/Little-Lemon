import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initializeTimes, updateTimes, getDateString, retrieveFromLocalStorage } from './App';

beforeAll(() => {
	jest.useFakeTimers();
	jest.setSystemTime(new Date('2025-03-09T12:00').getTime())
});

afterAll(() => {
	jest.useRealTimers();
});

test('Renders App', () => {
	render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	);
  	const headerElements = screen.getAllByText("Little Lemon");
  	expect(headerElements[0]).toBeInTheDocument();
});

test('Checks initializeTimes return value assuming the entry is NOT already in local storage and then checks the value was written to local storage', () => {
	window.localStorage.clear()
	const dateObj = new Date()
	const times = initializeTimes(dateObj);
	
	expect(times[0]).toBe("17:00")

	const dateString = getDateString(dateObj);
	const storedValue = retrieveFromLocalStorage(dateString);

	expect(storedValue[0]).toBe("17:00");
});

test('Checks updateTimes return value assuming the entry is NOT already in local storage', ()=> {
	const initialState = []
	const date = "2025-03-10";
	expect(updateTimes(initialState,{type: date})[0]).toBe("17:00");
})

test('Checks form validation', () => {
	render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	);
  	
	const reserveButton = screen.getByText("Reserve a Table");
	fireEvent.click(reserveButton);
	
	const dateInput = screen.getByLabelText(/Choose date/);
	const timeInput = screen.getByLabelText(/Choose time/);
	const guestsInput = screen.getByLabelText(/Number of guests/);
	const occasionInput = screen.getByLabelText(/Occasion/);
	const submitButton = screen.getByText("Make Your Reservation");

	expect(dateInput).toBeInTheDocument();
	expect(timeInput).toBeInTheDocument();
	expect(guestsInput).toBeInTheDocument();
	expect(occasionInput).toBeInTheDocument();
	expect(submitButton).toBeInTheDocument();

	fireEvent.change(dateInput,{target:{value:"1999-10-23"}})
	expect(submitButton).toHaveAttribute('disabled')
	const todayString = getDateString(new Date())
	fireEvent.change(dateInput,{target:{value:todayString}})
	expect(dateInput).toHaveAttribute('value',"2025-03-09")
	expect(submitButton).not.toHaveAttribute('disabled')

	fireEvent.change(guestsInput,{target:{value:"0"}})
	expect(submitButton).toHaveAttribute('disabled')
	fireEvent.change(guestsInput,{target:{value:"1"}})
	expect(submitButton).not.toHaveAttribute('disabled')

});