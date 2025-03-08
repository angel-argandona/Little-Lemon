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
	const times = initializeTimes();
	expect(times).toStrictEqual(["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"]);
});

test('Checks updateTimes return value', ()=> {
	const initialState = ["8:00","9:00","10:00"];
	expect(updateTimes(initialState, {type: "newDate"})).toStrictEqual(["8:00","9:00","10:00"]);
})