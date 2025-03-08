import React, { useState, useReducer, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { WindowProvider } from './components/context/windowContext';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

export const initializeTimes = (date) => {
	return fetchAPI(date)
};

export const updateTimes = (state, action) => {
	const year = action.type.split("-")[0];
	const month = action.type.split("-")[1];
	const day = action.type.split("-")[2];
	const newDateObj = new Date(year, month, day);
	return fetchAPI(newDateObj);
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
	const [formSuccess, setFormSuccess] = useState(false);
	const navigate = useNavigate();
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
			setFormSuccess(true);
		}
	}


	/* FAILED IMPORT */
	/*useEffect(() => {
		const script = document.createElement('script')
		script.src = "https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
		script.async = true
		document.body.appendChild(script);

		return document.body.removeChild(script);
		
	}, [])*/
	
	useEffect(() => {
		setFieldValues({...fieldValues, time: state[0], availableTimes: state})
	}, [state])

	useEffect(() => {
		if (formSuccess) {
			navigate("/confirmed-booking");
		}
	}, [formSuccess])

	return (
    <WindowProvider>
		<Header/>
		<Routes>
			<Route path='/' element={<Main/>}></Route>
			<Route path='/reservations' element={<BookingPage {...fieldValues} changeField={changeField} submitHandler={submitHandler}/>}></Route>
			<Route path='/confirmed-booking' element={<ConfirmedBooking date={fieldValues.date} time={fieldValues.time} guests={fieldValues.guests}/>}></Route>
		</Routes>
		<Footer/>
	</WindowProvider>
  );
}

export default App;
