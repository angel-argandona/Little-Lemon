import React, { useState, useReducer, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { WindowProvider } from './components/context/windowContext';
import BookingPage from './components/BookingPage';
/*import { type } from '@testing-library/user-event/dist/type';*/

export const initializeTimes = (date) => {
	return fetchAPI(date)
	
	/*if (fetchAPI) {
		return fetchAPI(date);
	} else {
		let times = [];
		for (let i=8; i<22; i++){
			times.push(i + ":00");
		}
		return times;
	}*/
};

export const updateTimes = (state, action) => {
	const year = action.type.split("-")[0];
	const month = action.type.split("-")[1];
	const day = action.type.split("-")[2];
	const newDateObj = new Date(year, month, day);
	return fetchAPI(newDateObj);
	
	/*if (action.type === "newDate") {
		const newTimes = initializeTimes();
		return newTimes;
	} else if (action.type === "submit") {
		return state.filter(element => element !== fieldValues.time)
	}*/
};

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function(formData) {
    return true;
};

function App() {
	const dateObj = new Date()
	const currentDate = dateObj.toISOString().split("T")[0];
	const availableTimes = initializeTimes(dateObj);
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
			dispatch({type: e.target.value});
		}
	}

	const submitHandler = (e) => {
		e.preventDefault();
		console.log("Reservation values");
		console.log(fieldValues);
		if (submitAPI(fieldValues)){
			console.log("Submission successful");
		}
	}

	/*useEffect(() => {
		const script = document.createElement('script')
		script.src = "https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
		script.async = true
		script.onload = () => updateTimes();
		document.body.appendChild(script);

		return document.body.removeChild(script);
		
	}, [])*/
	
	useEffect(() => {
		setFieldValues({...fieldValues, time: state[0], availableTimes: state})
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
