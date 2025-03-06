import React from 'react';
import './Reservation.css'

function Reservation() {
  return (
	<div className='reservation-page'>
		<h1>Reservation</h1>
		<form>
			<label for='date'>Date:</label>
			<input type='date' id='date' required></input><br/>
			<label for='time'>Time:</label>
			<input type='time' id='time' required></input><br/>
			<label for='numOfGuests'>Guests:</label>
			<input type='number' id='numOfGuests' min="1" value="1"></input><br/>
			<label for='firstName'>First Name:</label>
			<input type='text' id='firstName'></input><br/>
			<label for='lastName'>Last Name:</label>
			<input type='text' id='lastName'></input><br/>
			<label for='email'>Email:</label>
			<input type='email' id='email'></input><br/>
			<input type='checkbox' id='checkPhone'></input>
			<label for='checkPhone' style={{paddingLeft:"1rem"}}>Send me SMS messages regarding my reservation.</label><br/>
			<label for='tel'>Phone Number:</label>
			<input type='tel' id='tel'></input><br/>
			<input type='submit' value="Create Reservation"></input>
		</form>
	</div>
  );
}

export default Reservation;