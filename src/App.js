import React, { useState, useReducer, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { WindowProvider } from './components/context/windowContext';
import { IconContext } from 'react-icons';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

export const getDateString = (dateObj) => {
	const offset = dateObj.getTimezoneOffset();
	const newDate = new Date(dateObj.getTime() - (offset*60*1000))
	return newDate.toISOString().split('T')[0]
}

export const retrieveFromLocalStorage = (key) => {
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
	const dateString = getDateString(date);
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
			const newDateObj = new Date(action.type);
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
	/*window.localStorage.clear()*/
	const navigate = useNavigate();
	const currentDateObj = new Date()
	const currentDate = getDateString(currentDateObj);
	const availableTimes = initializeTimes(currentDateObj);
	const [state, dispatch] = useReducer(updateTimes, availableTimes);
	const [isFormValid, setIsFormValid] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [formReceived, setFormReceived] = useState(false);
	const [fieldValues, setFieldValues] = useState({
		date: currentDate,
		time: state[0],
		guests: "",
		occasion: "",
		availableTimes: state
	});
	const [errors, setErrors] = useState({
		date: "",
		time: "",
		guests: "",
		occasion: ""
	})
	const [confirmedValues, setConfirmedValues] = useState({
		date:"",
		time:"",
		guests:"",
		occasion:""
	})

	const validate = (field, value) => {
		let newErrors = {};
		if (field === "date" || field === "form"){
			const today = new Date();
			const selectedDate = new Date(value.date + "T23:59");
			if (selectedDate < today) {
				newErrors.date = "Please select today's date or a future date.";
			} else {
				newErrors.date = "";
			}
		}
		
		if (field === "time" || field === "form"){
			const currentDateTime = new Date();
			const dateTimeString = value.date + "T" + value.time;
			const selectedDateTime = new Date(dateTimeString);
			if (selectedDateTime < currentDateTime){
				newErrors.time = "Please select a time in the future.";
			} else {
				newErrors.time = "";
			}
		}
		
		if (field === "guests" || field === "form"){
			if (!value.guests){
				newErrors.guests = "Please fill out this required field.";
			} else if (Number(value.guests) < 1){
				newErrors.guests = "Please enter a number greater than 0.";
			} else if (Number(value.guests) > 10){
				newErrors.guests = "Please enter a number less than 10.";
			} else {
				newErrors.guests = "";
			}
		}
		
		const updatedErrors = {...errors, ...newErrors};
		if (updatedErrors.date || updatedErrors.time || updatedErrors.guests || updatedErrors.occasion){
			setIsFormValid(false);
		} else {
			setIsFormValid(true);
			if (field === "form"){
				setIsLoading(true);
			}
		}
		setErrors(updatedErrors);
	}

	const changeField = (e) => {
		setFieldValues({...fieldValues, [e.target.name]:e.target.value});
		if (e.target.name === "date"){
			validate(e.target.name,{date: e.target.value})
			dispatch({type: e.target.value});
		} else if (e.target.name === "time"){
			validate(e.target.name,{time: e.target.value, date: fieldValues.date})
		} else {
			validate(e.target.name,{[e.target.name]: e.target.value})
		}
		
	}

	const submitHandler = (e) => {
		e.preventDefault();
		validate("form", {date: fieldValues.date, time: fieldValues.time, guests: fieldValues.guests, occasion: fieldValues.occasion});
	}

	/* Send form to API if conditions are met */
	useEffect(() => {
		if (isLoading && isFormValid) {
			setFormReceived(submitAPI(fieldValues));
			setIsLoading(false);
		}
	},[isLoading])

	/* Form successfully received by server */
	useEffect(() => {
		if (formReceived) {
			setConfirmedValues({date:fieldValues.date,time:fieldValues.time,guests:fieldValues.guests,occasion:fieldValues.occasion});
			navigate("/confirmed-booking");
			setFormReceived(false);
			dispatch({type:`submit ${fieldValues.date} ${fieldValues.time}`});
		}
	}, [formReceived]);

	/* Update time selection whenever the availableTimes' state changes */
	useEffect(() => {
		if (!formReceived){
			setFieldValues({...fieldValues, time: state[0], availableTimes: state})
		}
	}, [state]);

	return (
    <WindowProvider>
		<IconContext.Provider value={{color: "#333333"}}>
			<Header/>
			<Routes>
				<Route path='/' element={<Main/>}></Route>
				<Route path='/reservations' element={<BookingPage 
				{...fieldValues} changeField={changeField} submitHandler={submitHandler} currentDate={currentDate} isFormValid={isFormValid} errors={errors}/>}
				></Route>
				<Route path='/confirmed-booking' element={<ConfirmedBooking date={confirmedValues.date} time={confirmedValues.time} guests={confirmedValues.guests}/>}></Route>
			</Routes>
			<Footer/>
		</IconContext.Provider>
	</WindowProvider>
  );
}

export default App;
