import React, { useState, useReducer, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { WindowProvider } from './components/context/windowContext';
import BookingPage from './components/BookingPage';
/*import { type } from '@testing-library/user-event/dist/type';*/

export const initializeTimes = () => {
	let times = [];
	for (let i=8; i<22; i++){
		times.push(i + ":00");
	}
	return times;
};

export const updateTimes = (state, action) => {
	return state
	
	/*if (action.type === "newDate") {
		const newTimes = initializeTimes();
		return newTimes;
	} else if (action.type === "submit") {
		return state.filter(element => element !== fieldValues.time)
	}*/
};

function App() {
	const currentDate = new Date().toISOString().split("T")[0];
	const availableTimes = initializeTimes();
	const [state, dispatch] = useReducer(updateTimes, availableTimes);
	const [fieldValues, setFieldValues] = useState({
		date: currentDate,
		time: state[0],
		guests: "1",
		occasion: "birthday",
		availableTimes: state
	});

	const changeField = (e) => {
		setFieldValues({...fieldValues, [e.target.name]:e.target.value});
		console.log(`Updated ${e.target.name} to ${e.target.value}`);
		if (e.target.name === "date") {
			dispatch({type: "newDate"});
		}
	}

	const submitHandler = (e) => {
		e.preventDefault();
		console.log("Reservation values");
		console.log(fieldValues);
	}
	
	useEffect(() => {
		setFieldValues({...fieldValues, time: state[0], availableTimes: state})
		console.log("State changed")
	}, [state])

	return (
    <WindowProvider>
		<Header/>
		<Routes>
			<Route path='/' element={<Main/>}></Route>
			<Route path='/reservations' element={<BookingPage {...fieldValues} changeField={changeField} submitHandler={submitHandler}/>}></Route>
		</Routes>
		<Footer/>
	</WindowProvider>
  );
}

export default App;
