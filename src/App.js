import React, { useState, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { WindowProvider } from './components/context/windowContext';
import BookingPage from './components/BookingPage';

const initializeTimes = (date) => {
	let times = []
	for (let i=8; i<22; i++){
		times.push(i + ":00")
	}
	return {date: date, availableTimes: times}
}

const updateTimes = (state, action) => {
	return state.push(initializeTimes(action.type));
}

function App() {
	const currentDate = new Date().toISOString().split("T")[0];
	const availableTimes = [initializeTimes(currentDate)]
	const [state, dispatch] = useReducer(availableTimes, updateTimes)
	const [fieldValues, setFieldValues] = useState({
		date: state[0].date,
		time: state[0].availableTimes[0],
		guests: "1",
		occasion: "birthday",
		availableTimes: state[0].availableTimes,
		changeHandler: (key, value)=>{
			setFieldValues({...fieldValues, key:value})
			if (key === 'date') {
				dispatch({type: value})
			}
		}
	});
	
	return (
    <WindowProvider>
		<Header/>
		<Routes>
			<Route path='/' element={<Main/>}></Route>
			<Route path='/reservations' element={<BookingPage {...fieldValues}/>}></Route>
		</Routes>
		<Footer/>
	</WindowProvider>
  );
}

export default App;
