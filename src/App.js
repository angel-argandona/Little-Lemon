import React, { useState, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { WindowProvider } from './components/context/windowContext';
import BookingPage from './components/BookingPage';

/* 
const index = state.availableTimes.indexOf(action.type)
	if (index > -1) {
		return {...state, availableTimes: state.availableTimes.splice(index, 1)}
	} else {
		return {...state}
	}
*/

export const initializeTimes = () => {
	let times = [];
	for (let i=8; i<22; i++){
		times.push(i + ":00");
	}
	return times;
};

export const updateTimes = (state, action) => {
	const newTimes = initializeTimes();
	setFieldValues({...fieldValues, availableTimes: newTimes});
	return newTimes;
};

function App() {
	
	const currentDate = new Date().toISOString().split("T")[0];
	const availableTimes = initializeTimes();
	const [state, dispatch] = useReducer(availableTimes, updateTimes);
	const [fieldValues, setFieldValues] = useState({
		date: currentDate,
		time: availableTimes[0],
		guests: "1",
		occasion: "birthday",
		availableTimes: availableTimes,
		changeHandler: (obj, key)=>{
			setFieldValues({...fieldValues, [key]:obj[key]})
			if (key === 'date') {
				dispatch({type: obj[key]})
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
