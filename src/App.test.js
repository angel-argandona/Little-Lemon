import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initializeTimes, updateTimes } from './App';

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
	const dateObj = new Date()
	const times = initializeTimes(dateObj);
	
	expect(times[0]).toBe("17:00")

	const dateString = dateObj.toISOString().split("T")[0];
	const storedValue = window.localStorage.getItem(dateString);

	expect(JSON.parse(storedValue)[0]).toBe("17:00");
});

test('Checks updateTimes return value assuming the entry is NOT already in local storage', ()=> {
	const initialState = []
	const date = "2025-03-08";
	expect(updateTimes(initialState,{type: date})[0]).toBe("17:00");
})