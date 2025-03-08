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

test('Checks initializeTimes return value', () => {
	const dateObj = new Date()
	const times = initializeTimes(dateObj);
	expect(times[0]).toBe("17:00");
});

test('Checks updateTimes return value', ()=> {
	const initialState = []
	const date = "2025-03-08";
	expect(updateTimes(initialState,{type: date})[0]).toBe("17:00");
})