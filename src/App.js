import React, { useState, useReducer, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { WindowProvider } from './components/context/windowContext';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

const retrieveFromLocalStorage = (key) => {
	try {
		const value = window.localStorage.getItem(key);
		if (value) {
			return JSON.parse(value)
		} else {
			return null
		}
	} catch (error) {
		console.error("Unable to retrieve from local storage:", error)
		return null
	}
}

export const initializeTimes = (date) => {
	const dateString = date.toISOString().split("T")[0];
	let times = retrieveFromLocalStorage(dateString);
	if (!times){
		times = fetchAPI(date)
		window.localStorage.setItem(dateString, JSON.stringify(times));
	}

	return times
};

export const updateTimes = (state, action) => {
	if (action.type.split(" ")[0] === "submit"){
		const date = action.type.split(" ")[1];
		const time = action.type.split(" ")[2];
		const newTimes = state.filter(element => element !== time)
		window.localStorage.setItem(date, JSON.stringify(newTimes))
		return newTimes
	} else {
		const times = retrieveFromLocalStorage(action.type);
		if (times) {
			return times;
		} else {
			const year = action.type.split("-")[0];
			let monthNum = Number(action.type.split("-")[1])
			monthNum -= 1;
			const month = monthNum.toString();
			const day = action.type.split("-")[2];
			const newDateObj = new Date(year, month, day);
			return initializeTimes(newDateObj);
		}
	}
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
		console.log(fieldValues);
		if (submitAPI(fieldValues)){
			setFormSuccess(true);
			dispatch({type:`submit ${fieldValues.date} ${fieldValues.time}`});
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
		if (!formSuccess){
			setFieldValues({...fieldValues, time: state[0], availableTimes: state})
		}
	}, [state]);

	useEffect(() => {
		if (formSuccess) {
			setFormSuccess(false);
			navigate("/confirmed-booking");
		}
	}, [formSuccess]);

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
